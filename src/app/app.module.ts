import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FunctionComponent } from './function/function.component';
import { ImageDetailComponent } from './function/image-detail/image-detail.component';
import { ImageListComponent } from './function/image-list/image-list.component';
import { ImageItemComponent } from './function/image-list/image-item/image-item.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistEditComponent } from './wishlist/wishlist-edit/wishlist-edit.component';
import { WishListService } from './wishlist/wishlist.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageEditComponent } from './function/image-edit/image-edit.component';
import { ImageStartComponent } from './function/image-start/image-start.component';
import { ImageService } from './function/function.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FunctionComponent,
    ImageDetailComponent,
    ImageListComponent,
    ImageItemComponent,
    DropdownDirective,
    WishlistComponent,
    WishlistEditComponent,
    ImageEditComponent,
    ImageStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ImageService,WishListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
