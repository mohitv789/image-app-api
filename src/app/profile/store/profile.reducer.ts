import { Image } from '../image.model';
import * as ImageActions from './profile.actions';

export interface State {
  images: Image[];
}

const initialState: State = {
  images: []
};

export function imageReducer(
  state = initialState,
  action: ImageActions.ImageActions
) {
  switch (action.type) {
    case ImageActions.SET_IMAGES:
      return {
        ...state,
        images: [...action.payload]
      };
    case ImageActions.ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, action.payload]
      };
    case ImageActions.UPDATE_IMAGE:
      const updatedImage = {
        ...state.images[action.payload.index],
        ...action.payload.newImage
      };

      const updatedImages = [...state.images];
      updatedImages[action.payload.index] = updatedImage;

      return {
        ...state,
        images: updatedImages
      };
    case ImageActions.DELETE_IMAGE:
      return {
        ...state,
        images: state.images.filter((image, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
