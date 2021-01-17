import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Album } from '../album.model';
import * as fromApp from '../../store/app.reducer';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit, OnDestroy {
  albums: Album[];
  subscription: Subscription;
  constructor(private router: Router,
            private route: ActivatedRoute,
            private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('albums')
      .pipe(map(albumsState => albumsState.albums))
      .subscribe(
        (albums: Album[]) => {
          this.albums = albums;
        }
      );
  }


  onNewAlbum() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
