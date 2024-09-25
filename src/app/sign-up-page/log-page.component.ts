import { Component } from '@angular/core';

@Component({
  selector: 'app-log-page',
  templateUrl:'./log-page.component.html',
  styleUrls: ['./log-page.component.css']
})
export class SignUpPageComponent {

  signingIn = false;
  toggleSignIn() {
    this.signingIn = !this.signingIn;
  }


}
