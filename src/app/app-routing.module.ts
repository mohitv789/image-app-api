import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/images', pathMatch: 'full' },
  { path: 'images', loadChildren: () => import('./function/image.module').then(m => m.ImageModule)},
  { path: 'albums', loadChildren: () => import('./album/album.module').then(m => m.AlbumModule)},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
