import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { WishListService } from '../wishlist.service';
import { ImageComponent } from '../../shared/breakdown.model'
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-wishlist-edit',
  templateUrl: './wishlist-edit.component.html',
  styleUrls: ['./wishlist-edit.component.css']
})

export class WishlistEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) wlForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: ImageComponent;

  constructor(private wlService: WishListService) { }

  ngOnInit() {
    this.subscription = this.wlService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.wlService.getComponent(index);
          this.wlForm.setValue({
            person: this.editedItem.person,
            place: this.editedItem.place
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newComponent = new ImageComponent(value.person, value.place);
    if (this.editMode) {
      this.wlService.updateComponent(this.editedItemIndex, newComponent);
    } else {
      this.wlService.addComponent(newComponent);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.wlForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.wlService.deleteComponent(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
