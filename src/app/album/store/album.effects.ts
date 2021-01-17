import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import * as AlbumsActions from './album.actions';
import { Album } from '../album.model';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class AlbumEffects {
  @Effect()
  fetchAlbums = this.actions$.pipe(
    ofType(AlbumsActions.FETCH_ALBUMS),
    switchMap(() => {
      return this.http.get<Album[]>(
        'https://imageproject-dd520-default-rtdb.firebaseio.com/albums.json'
      );
    }),
    map(albums => {
      return albums.map(album => {
        return {
          ...album
        };
      });
    }),
    map(albums => {
      return new AlbumsActions.SetAlbums(albums);
    })
  );

  @Effect({dispatch: false})
  storeAlbums = this.actions$.pipe(
    ofType(AlbumsActions.STORE_ALBUMS),
    withLatestFrom(this.store.select('albums')),
    switchMap(([actionData, albumsState]) => {
      return this.http.put(
        'https://imageproject-dd520-default-rtdb.firebaseio.com/albums.json',
        albumsState.albums
      );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
