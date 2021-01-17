import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { ImagesResolverService } from "./function-resolver.service";
import { FunctionComponent } from "./function.component";
import { ImageDetailComponent } from "./image-detail/image-detail.component";
import { ImageEditComponent } from "./image-edit/image-edit.component";
import { ImageStartComponent } from "./image-start/image-start.component";

const routes: Routes = [
    {
        path: '',
        component: FunctionComponent,
        canActivate: [AuthGuard],
        children: [
          { path: '', component: ImageStartComponent },
          { path: 'new', component: ImageEditComponent },
          {
            path: ':id',
            component: ImageDetailComponent,
            resolve: [ImagesResolverService]
          },
          {
            path: ':id/edit',
            component: ImageEditComponent,
            resolve: [ImagesResolverService]
          }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageRoutingModule {}
