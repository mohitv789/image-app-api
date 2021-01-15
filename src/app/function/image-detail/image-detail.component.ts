import { Component, OnInit } from '@angular/core';
import { Image } from '../image.model';
import { ImageService } from '../function.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})


export class ImageDetailComponent implements OnInit {
  image: Image;
  id: number;

  constructor(private imageService: ImageService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.image = this.imageService.getImage(this.id);
        }
      );
  }

  onAddToWishList() {
    this.imageService.addComponentsToWishList(this.image.components);
  }

  onEditImage() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteImage() {
    this.imageService.deleteImage(this.id);
    this.router.navigate(['/images']);
  }

}
