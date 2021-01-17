import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { AlbumRoutingModule } from "./album-routing.module";
import { SharedModule } from "../shared/shared.module";
import { AlbumComponent } from "./album.component";
import { AlbumListComponent } from "./album-list/album-list.component";
import { AlbumDetailComponent } from "./album-detail/album-detail.component";
import { AlbumItemComponent } from "./album-list/album-item/album-item.component";
import { AlbumStartComponent } from "./album-start/album-start.component";
import { AlbumImageListComponent } from './album-image-list/album-image-list.component';
import { AlbumCreateComponent } from "./album-create/album-create.component";

@NgModule({
    declarations: [
        AlbumComponent,
        AlbumListComponent,
        AlbumDetailComponent,
        AlbumCreateComponent,
        AlbumItemComponent,
        AlbumStartComponent,
        AlbumImageListComponent
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        AlbumRoutingModule,
        SharedModule,
    ]
})

export class AlbumModule {}
