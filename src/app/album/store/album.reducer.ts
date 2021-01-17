import { Image } from 'src/app/function/image.model';
import { Album } from '../album.model';
import * as AlbumsActions from './album.actions';

export interface State {
  albums: Album[];
  images: Image[];
}

const initialState: State = {
  albums: [],
  images: []
};

export function albumReducer(
  state = initialState,
  action: AlbumsActions.AlbumActions
) {
  switch (action.type) {
    case AlbumsActions.SET_ALBUMS:
      return {
        ...state,
        albums: [...action.payload]
      };
    case AlbumsActions.ADD_ALBUM:
      return {
        ...state,
        albums: [...state.albums, action.payload]
      };
    case AlbumsActions.UPDATE_ALBUM:
      const updatedAlbum = {
        ...state.albums[action.payload.index],
        ...action.payload.newAlbum
      };

      const updatedAlbums = [...state.albums];
      updatedAlbums[action.payload.index] = updatedAlbum;

      return {
        ...state,
        albums: updatedAlbums
      };
    case AlbumsActions.DELETE_ALBUM:
      return {
        ...state,
        albums: state.albums.filter((album, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
