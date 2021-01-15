import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ImageService } from '../function.service';
import { Image } from '../image.model'
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})

export class ImageListComponent implements OnInit {  
  images: Image[];  
  subscription: Subscription;
  constructor(private imageService: ImageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.imageService.imagesChanged
      .subscribe(
        (images: Image[]) => {
          this.images = images;
        }
      );
    this.images = this.imageService.getImages();
  }
  onNewImage() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
