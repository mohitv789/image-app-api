import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ImageService } from '../function.service';

@Component({
  selector: 'app-image-edit',
  templateUrl: './image-edit.component.html',
  styleUrls: ['./image-edit.component.css']
})

export class ImageEditComponent implements OnInit {
  id: number;
  editMode = false;
  imageForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private imageService: ImageService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.imageService.updateImage(this.id, this.imageForm.value);
    } else {
      this.imageService.addImage(this.imageForm.value);
    }
    this.onCancel();
  }

  onAddImageComponent() {
    (<FormArray>this.imageForm.get('components')).push(
      new FormGroup({
        'person': new FormControl(null, Validators.required),
        'place': new FormControl(null, Validators.required)
      })
    );
  }

  onDeleteImageComponent(index: number) {
    (<FormArray>this.imageForm.get('components')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }



  private initForm() {
    let imageName = '';
    let imagePath = '';
    let imageDescription = '';
    let imagePlace = '';
    let imageComponents = new FormArray([]);

    if (this.editMode) {
      const imageData = this.imageService.getImage(this.id);
      imageName = imageData.name;
      imagePath = imageData.imagePath;
      imagePlace = imageData.place;
      imageDescription = imageData.description;
      if (imageData['components']) {
        for (let component of imageData.components) {
          imageComponents.push(
            new FormGroup({
              'person': new FormControl(component.person, Validators.required),
              'place': new FormControl(component.place, Validators.required)
            })
          );
        }
      }
    }

    this.imageForm = new FormGroup({
      'name': new FormControl(imageName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'place': new FormControl(imagePlace, Validators.required),
      'description': new FormControl(imageDescription, Validators.required),
      'components': imageComponents
    });
  }

}
