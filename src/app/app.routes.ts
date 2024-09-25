import { Routes, RouterOutlet, RouterModule } from '@angular/router';
import { SellPageComponent } from './sell-page/sell-page.component';
import { NgModule } from '@angular/core';
import { RentPageComponent } from './rent-page/rent-page.component';
import { BuyPageComponent } from './buy-page/buy-page.component';
import { SignUpPageComponent } from './sign-up-page/log-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';


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
        path:'sign-in-page',
        component: SignInPageComponent,
        pathMatch: 'full'
    },
    {
        path: 'sign-up-page',
        component: SignUpPageComponent,
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
