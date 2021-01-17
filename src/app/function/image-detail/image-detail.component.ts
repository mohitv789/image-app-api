import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducer';
import * as ImagesActions from '../store/image.actions';
import { map, switchMap } from 'rxjs/operators';
import { Album } from 'src/app/album/album.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})


export class ImageDetailComponent implements OnInit {
  image: Image;
  album: Album;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}


  ngOnInit() {
    this.route.params
      .pipe(
        map(params => {
          return +params['id'];
        }),
        switchMap(id => {
          this.id = id;
          return this.store.select('images');
        }),
        map(imagesState => {
          return imagesState.images.find((image, index) => {
            return index === this.id;
          });
        })
      )
      .subscribe(image => {
        this.image = image;
      });
  }

  // onAddToWishList() {
  //   // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  //   this.store.dispatch(
  //     new WishListActions.AddComponents(this.image.components)
  //   );
  // }

  onEditImage() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteImage() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new ImagesActions.DeleteImage(this.id));
    this.router.navigate(['/images']);
  }
}
