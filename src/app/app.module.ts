import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SellPageComponent } from './sell-page/sell-page.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { RentPageComponent } from './rent-page/rent-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SellPageComponent,
    RentPageComponent,
    BuyPageComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
