import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { Image } from '../../image.model';
import {ImageService } from "../../function.service";

@Component({
  selector: 'app-image-item',
  templateUrl: './image-item.component.html',
  styleUrls: ['./image-item.component.css']
})

export class ImageItemComponent implements OnInit {
  @Input() image: Image;
  @Input() index: number;
  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

}
