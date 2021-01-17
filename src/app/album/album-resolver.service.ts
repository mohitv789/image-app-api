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
import * as fromApp from '../store/app.reducer';
import * as AlbumsActions from './store/album.actions';
import { Album } from './album.model';

@Injectable({ providedIn: 'root' })
export class AlbumsResolverService implements Resolve<Album[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('albums').pipe(
      take(1),
      map(albumsState => {
        return albumsState.albums;
      }),
      switchMap(albums => {
        if (albums.length === 0) {
          this.store.dispatch(new AlbumsActions.FetchAlbums());
          return this.actions$.pipe(
            ofType(AlbumsActions.SET_ALBUMS),
            take(1)
          );
        } else {
          return of(albums);
        }
      })
    );
  }
}
