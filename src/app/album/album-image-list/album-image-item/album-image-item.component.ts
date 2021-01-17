// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Store } from '@ngrx/store';
// import { Album } from '../../album.model';
// import * as fromApp from '../../../store/app.reducer';
// import * as AlbumsActions from '../../store/album.actions';
// import { map, switchMap } from 'rxjs/operators';

// @Component({
//   selector: 'app-album-image-item',
//   templateUrl: './album-image-item.html',
//   styleUrls: ['./album-image-item.component.css']
// })
// export class AlbumDetailComponent implements OnInit {

//   album: Album;
//   id: number;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private store: Store<fromApp.AppState>
//   ) {}


//   ngOnInit() {
//     this.route.params
//       .pipe(
//         map(params => {
//           return +params['id'];
//         }),
//         switchMap(id => {
//           this.id = id;
//           return this.store.select('albums');
//         }),
//         map(albumsState => {
//           return albumsState.albums.find((album, index) => {
//             return index === this.id;
//           });
//         })
//       )
//       .subscribe(album => {
//         this.album = album;
//       });
//   }


//   onDeleteAlbum() {
//     this.store.dispatch(new AlbumsActions.DeleteAlbum(this.id));
//     this.router.navigate(['/albums']);
//   }

// }
