import * as fromImages from '../function/store/image.reducer';
import * as fromAlbums from '../album/store/album.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import { ActionReducerMap } from '@ngrx/store';


export interface AppState {
  auth: fromAuth.State;
  images: fromImages.State;
  albums: fromAlbums.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  images: fromImages.imageReducer,
  albums: fromAlbums.albumReducer
}
