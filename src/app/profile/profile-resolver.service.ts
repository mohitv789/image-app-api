import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { take, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Image } from './image.model';
import * as fromApp from '../store/app.reducer';
import * as ImagesActions from './store/image.actions';

@Injectable({ providedIn: 'root' })
export class ImagesResolverService implements Resolve<Image[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('images').pipe(
      take(1),
      map(imagesState => {
        return imagesState.images;
      }),
      switchMap(images => {
        if (images.length === 0) {
          this.store.dispatch(new ImagesActions.FetchImages());
          return this.actions$.pipe(
            ofType(ImagesActions.SET_IMAGES),
            take(1)
          );
        } else {
          return of(images);
        }
      })
    );
  }
}
