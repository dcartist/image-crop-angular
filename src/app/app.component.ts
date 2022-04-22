import { Component } from '@angular/core';
import {DialogModule, Dialog} from 'primeng/dialog'
import { ImageCroppedEvent } from 'ngx-image-cropper';
// import { Dimensions, ImageCroppedEvent, ImageTransform } from './image-cropper/interfaces/index';
import {base64ToFile} from './image-cropper/utils/blob.utils';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  display: boolean = false;

  showDialog() {
      this.display = true;
  }
  title = 'image-crop-angular';
  imgChangeEvt: any = '';
    cropImgPreview: any = '';
    onFileChange(event: any): void {
        this.imgChangeEvt = event;
    }
    cropImg(e: ImageCroppedEvent) {
        this.cropImgPreview = e.base64;
    }
    imgLoad() {
        // display cropper tool
    }
    initCropper() {
        // init cropper
    }
    
    imgFailed() {
        // error msg
}
}