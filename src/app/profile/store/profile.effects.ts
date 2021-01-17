import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as ImagesActions from './profile.actions';
import { Image } from '../image.model';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class ImageEffects {
  @Effect()
  fetchImages = this.actions$.pipe(
    ofType(ImagesActions.FETCH_IMAGES),
    switchMap(() => {
      return this.http.get<Image[]>(
        'https://imageproject-dd520-default-rtdb.firebaseio.com/images.json'
      );
    }),
    map(images => {
      return images.map(image => {
        return {
          ...image,
          components: image.components ? image.components : []
        };
      });
    }),
    map(images => {
      return new ImagesActions.SetImages(images);
    })
  );

  @Effect({dispatch: false})
  storeImages = this.actions$.pipe(
    ofType(ImagesActions.STORE_IMAGES),
    withLatestFrom(this.store.select('images')),
    switchMap(([actionData, imagesState]) => {
      return this.http.put(
        'https://imageproject-dd520-default-rtdb.firebaseio.com/images.json',
        imagesState.images
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
