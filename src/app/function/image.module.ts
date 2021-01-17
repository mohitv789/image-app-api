import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ImageRoutingModule } from "./image-routing.module";
import { SharedModule } from "../shared/shared.module";
import { ImageListComponent } from "./image-list/image-list.component";
import { ImageDetailComponent } from "./image-detail/image-detail.component";
import { ImageItemComponent } from "./image-list/image-item/image-item.component";
import { ImageStartComponent } from "./image-start/image-start.component";
import { ImageEditComponent } from "./image-edit/image-edit.component";
import { FunctionComponent } from "./function.component";

@NgModule({
    declarations: [
        FunctionComponent,
        ImageListComponent,
        ImageDetailComponent,
        ImageItemComponent,
        ImageStartComponent,
        ImageEditComponent,
    ],
    imports: [
        RouterModule,
        ReactiveFormsModule,
        ImageRoutingModule,
        SharedModule,
    ]
})

export class ImageModule {}
