import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'estate-one';

  constructor(private _router: Router) {
  }
  //add page to input to navigate
  navigatePage(page: string) {
    this._router.navigate([page])
  }

  ngOnInit(): void {
      console.log("app.components.ts init")
  }
  logButton() {
    console.log("button was clicked");
  }
}
