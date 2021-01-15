import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionComponent } from './function/function.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ImageStartComponent } from './function/image-start/image-start.component';
import { ImageDetailComponent } from './function/image-detail/image-detail.component';
import { ImageEditComponent } from './function/image-edit/image-edit.component';
import { ImageResolverService } from './function/function-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  { path: 'images', component: FunctionComponent, children: [
    { path: '', component: ImageStartComponent },
    { path: 'new', component: ImageEditComponent },
    { path: ':id', component: ImageDetailComponent,resolve: [ImageResolverService] },
    { path: ':id/edit', component: ImageEditComponent,resolve: [ImageResolverService] },
  ] },
  { path: 'wishlist', component: WishlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
