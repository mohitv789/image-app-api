import { Action } from '@ngrx/store';

import { Image } from '../image.model';

export const SET_IMAGES = '[Function] Set Images';
export const FETCH_IMAGES = '[Functions] Fetch Images';
export const ADD_IMAGE = '[Function] Add Image';
export const UPDATE_IMAGE = '[Function] Update Image';
export const DELETE_IMAGE = '[Function] Delete Image';
export const STORE_IMAGES = '[Function] Store Images';

export class SetImages implements Action {
  readonly type = SET_IMAGES;

  constructor(public payload: Image[]) {}
}

export class FetchImages implements Action {
  readonly type = FETCH_IMAGES;
}

export class AddImage implements Action {
  readonly type = ADD_IMAGE;

  constructor(public payload: Image) {}
}

export class UpdateImage implements Action {
  readonly type = UPDATE_IMAGE;

  constructor(public payload: { index: number; newImage: Image }) {}
}

export class DeleteImage implements Action {
  readonly type = DELETE_IMAGE;

  constructor(public payload: number) {}
}

export class StoreImages implements Action {
  readonly type = STORE_IMAGES;
}

export type ImageActions =
  | SetImages
  | FetchImages
  | AddImage
  | UpdateImage
  | DeleteImage
  | StoreImages;
