import { Routes, RouterOutlet, RouterModule } from '@angular/router';
import { SellPageComponent } from './sell-page/sell-page.component';
import { NgModule } from '@angular/core';
import { RentPageComponent } from './rent-page/rent-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { LogPageComponent } from './log-page/log-page.component';


export const routes: Routes = [
    {
        path: 'buy-page',
        component: BuyPageComponent,
        pathMatch: 'full'
    },
    {
        path:'rent-page',
        component: RentPageComponent,
        pathMatch: 'full'
    },
    {
        path:'sell-page',
        component: SellPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'log-page',
        component: LogPageComponent,
        pathMatch: 'full'
    },
    {
        path: "",
        redirectTo: '/',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
