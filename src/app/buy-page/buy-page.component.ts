import { Component } from '@angular/core';

@Component({
  selector: 'app-buy-page',
  templateUrl: './buy-page.component.html',
  styleUrls: ['./buy-page.component.css']
})
export class BuyPageComponent {
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
