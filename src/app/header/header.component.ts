import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as fromApp from '../store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as AuthActions from '../auth/store/auth.actions';
import * as ImagesActions from '../function/store/image.actions';
import * as AlbumsActions from '../album/store/album.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;
  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit() {
    this.userSub = this.store
        .select('auth')
        .pipe(map(authState=>authState.user))
        .subscribe(user => {
          this.isAuthenticated = !!user;
          console.log(!user);
          console.log(!!user);
      });
  }

  onSaveData() {
    this.store.dispatch(new ImagesActions.StoreImages());
    this.store.dispatch(new AlbumsActions.StoreAlbums());
  }

  onFetchData() {
    this.store.dispatch(new ImagesActions.FetchImages());
    this.store.dispatch(new AlbumsActions.FetchAlbums());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
