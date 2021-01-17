import { Injectable } from "@angular/core";
import { Image } from "./image.model";
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Injectable()
export class ImageService {
  imagesChanged = new Subject<Image[]>();

  private images: Image[] = [];
  constructor(private store: Store<fromApp.AppState>) {}

  setImages(images: Image[]) {
    this.images = images;
    this.imagesChanged.next(this.images.slice());
  }

  getImages() {
      return this.images.slice();
  }

  getImage(index: number) {
    return this.images[index];
  }

  // addComponentsToWishList(components: ImageComponent[]) {
  //   this.store.dispatch(new WishListActions.AddComponents(components));
  // }

  // addImagetoAlbum(index:number , image: Image) {
  //   this.store.dispatch(new AlbumsActions.AddImageToAlbum({index,image}));
  // }

  addImage(image: Image) {
    this.images.push(image);
    this.imagesChanged.next(this.images.slice());
  }

  updateImage(index: number, newImage: Image) {
    this.images[index] = newImage;
    this.imagesChanged.next(this.images.slice());
  }

  deleteImage(index: number) {
    this.images.splice(index, 1);
    this.imagesChanged.next(this.images.slice());
  }

}
