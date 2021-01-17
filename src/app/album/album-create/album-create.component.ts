import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ActivatedRoute, ParamMap, Params, Router } from "@angular/router";
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Subscription } from "rxjs";
import * as AlbumsActions from '../store/album.actions';
import { map } from "rxjs/operators";

@Component({
  selector: "app-album-create",
  templateUrl: "./album-create.component.html",
  styleUrls: ["./album-create.component.css"]
})
export class AlbumCreateComponent implements OnInit {
  id: number;
  editMode = false;
  albumForm: FormGroup;

  private storeSub: Subscription;

  get imagesControls() {
    return (this.albumForm.get('images') as FormArray).controls;
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
        new AlbumsActions.UpdateAlbum({
          index: this.id,
          newAlbum: this.albumForm.value
        })
      );
      return;
    } else {
      this.store.dispatch(new AlbumsActions.AddAlbum(this.albumForm.value));
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    if (this.storeSub) {
      this.storeSub.unsubscribe();
    }
  }

  private initForm() {
    let albumTitle = '';
    if (this.editMode) {
      this.storeSub = this.store
        .select('albums')
        .pipe(
          map(albumState => {
            return albumState.albums.find((album, index) => {
              return index === this.id;
            });
          })
        )
        .subscribe(album => {
          albumTitle = album.title;
        });
    }

    this.albumForm = new FormGroup({
      title: new FormControl(albumTitle, Validators.required)
    });
  }

}
