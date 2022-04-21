import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageCropperModule } from 'ngx-image-cropper';
// import { ImageCropperModule } from './image-cropper/image-cropper.module';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule, FormsModule, ImageCropperModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
