import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { Image } from '../function/image.model';
import { ImageService } from '../function/function.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  firstLoad = true;
  constructor(
    private http: HttpClient,
    private imageService: ImageService,
  ) {}

  // storeImages() {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',})
  //   };
  //   const images = this.imageService.getImages();
  //   for (let image of images){
  //     this.http
  //     .put('http://127.0.0.1:8000/api/images/', image, httpOptions)
  //   }

  // }

  fetchImages() {

    return this.http
      .get<Image[]>(
        'https://imageproject-dd520-default-rtdb.firebaseio.com/images.json'
      )
      .pipe(
        map(images => {
          return images.map(image => {
            return {
              ...image,
              ingredients: image.components ? image.components : []
            };
          });
        }),
        tap(images => {
          this.imageService.setImages(images);
        })
      );
  }
}
