import { Action } from '@ngrx/store';
import { Album } from '../album.model';


export const SET_ALBUMS = '[Album] Set Albums';
export const FETCH_ALBUMS = '[Album] Fetch Albums';
export const ADD_ALBUM = '[Album] Add Album';
export const ADD_ALBUM_IMAGE = '[Album] Add image in Album';
export const UPDATE_ALBUM = '[Album] Update Album Name';
export const DELETE_ALBUM = '[Album] Delete Album';
export const STORE_ALBUMS = '[Album] Store Albums';


export class SetAlbums implements Action {
  readonly type = SET_ALBUMS;

  constructor(public payload: Album[]) {}
}

export class FetchAlbums implements Action {
  readonly type = FETCH_ALBUMS;
}

export class AddAlbum implements Action {
  readonly type = ADD_ALBUM;
  constructor(public payload: Album) {}
}
export class UpdateAlbum implements Action {
  readonly type = UPDATE_ALBUM;

  constructor(public payload: { index: number; newAlbum: Album }) {}
}

export class DeleteAlbum implements Action {
  readonly type = DELETE_ALBUM;
  constructor(public payload: number) {}
}

export class StoreAlbums implements Action {
  readonly type = STORE_ALBUMS;
}

export type AlbumActions =
  | SetAlbums
  | FetchAlbums
  | AddAlbum
  | UpdateAlbum
  | DeleteAlbum
  | StoreAlbums;
