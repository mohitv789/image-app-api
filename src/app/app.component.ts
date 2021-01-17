import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as AuthActions from './auth/store/auth.actions';
import * as fromApp from './store/app.reducer';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private store: Store<fromApp.AppState> , private authService: AuthService) {}

  ngOnInit() {
    this.store.dispatch(new AuthActions.AutoLogin());
  }

}
