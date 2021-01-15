import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css'],
})
export class FunctionComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    if (this.dataStorageService.firstLoad) {
      this.dataStorageService.fetchImages().subscribe();
      this.dataStorageService.firstLoad = false;
    }
  }

}
