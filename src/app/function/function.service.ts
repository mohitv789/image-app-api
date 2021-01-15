import { Injectable } from "@angular/core";
import { ImageComponent } from '../shared/breakdown.model';
import { WishListService } from '../wishlist/wishlist.service';
import { Image } from "./image.model";
import { Subject } from 'rxjs';

@Injectable()
export class ImageService {
  imagesChanged = new Subject<Image[]>();

  private images: Image[] = [];
  constructor(private wlService: WishListService) {}

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

  addComponentsToWishList(components: ImageComponent[]) {
    this.wlService.addComponents(components);
  }

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
