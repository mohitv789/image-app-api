import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as fromApp from '../../store/app.reducer';
import { Image } from '../image.model'
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})


export class ImageListComponent implements OnInit {
  images: Image[];
  subscription: Subscription;


  constructor(private router: Router,
              private route: ActivatedRoute,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.subscription = this.store.select('images')
      .pipe(map(imagesState => imagesState.images))
      .subscribe(
        (images: Image[]) => {
          this.images = images;
        }
      );
  }

  onNewImage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
