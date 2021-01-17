import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { AlbumCreateComponent } from "./album-create/album-create.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";
import { AlbumsResolverService } from "./album-resolver.service";
import { AlbumStartComponent } from "./album-start/album-start.component";
import { AlbumComponent } from "./album.component";

const routes: Routes = [
    {
        path: '',
        component: AlbumComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: AlbumStartComponent },
          { path: 'new', component: AlbumCreateComponent },
          {
            path: ':id',
            component: AlbumDetailComponent,
            resolve: [AlbumsResolverService]
          },
          {
            path: ':id/edit',
            component: AlbumCreateComponent,
            resolve: [AlbumsResolverService]
          }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AlbumRoutingModule {}
