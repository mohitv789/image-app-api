import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageComponent } from '../shared/breakdown.model';
import { WishListService } from './wishlist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})

export class WishlistComponent implements OnInit, OnDestroy {
  components: ImageComponent[];
  private subscription: Subscription;

  constructor(private wlService: WishListService) { }

  ngOnInit() {
    this.components = this.wlService.getComponents();
    this.subscription = this.wlService.componentsChanged
      .subscribe(
        (components: ImageComponent[]) => {
          this.components = components;
        }
      );
  }
  onEditItem(index: number) {
    this.wlService.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
