import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ImageService } from '../function.service';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as ImagesActions from '../store/image.actions';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})
export class ImageEditComponent implements OnInit {
  id: number;
  editMode = false;
  imageForm: FormGroup;

  private storeSub: Subscription;

  get componentsControls() {
    return (this.imageForm.get('components') as FormArray).controls;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.store.dispatch(
        new ImagesActions.UpdateImage({
          index: this.id,
          newImage: this.imageForm.value
        })
      );
    } else {
      this.store.dispatch(new ImagesActions.AddImage(this.imageForm.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  private initForm() {
    let imageName = '';
    let imagePath = '';
    let imageDescription = '';

    if (this.editMode) {
      this.storeSub = this.store
        .select('images')
        .pipe(
          map(imageState => {
            return imageState.images.find((image, index) => {
              return index === this.id;
            });
          })
        )
        .subscribe(image => {
          imageName = image.name;
          imagePath = image.imagePath;
          imageDescription = image.description;
        }
      )
    }
    this.imageForm = new FormGroup({
      name: new FormControl(imageName, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(imageDescription, Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }
}
