import { Component } from '@angular/core';

@Component({
  selector: 'app-rent-page',
  templateUrl: './rent-page.component.html',
  styleUrls: ['./rent-page.component.css']
})
export class RentPageComponent {
  cardCount: any;
  constructor() {
    this.cardCount = Array(10);
  }
 imgPointer = 1;
 imgCount = 3;
 jImg = "/assets/buy-page-cover-images/cover-image-"+ (this.imgPointer);
 switchImage() {
  if(this.imgPointer < this.imgCount) {
    this.imgPointer++;
    this.jImg = "/assets/buy-page-cover-images/cover-image-"+ (this.imgPointer);
  }
  console.log(this.imgPointer - 1 + " to " + this.imgPointer)
 }
//  jImg = "/assets/buy-page-cover-images/cover-image-"+ (this.jImgPointer[this.imgP]) + ".jpg";

}
