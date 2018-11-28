import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {TabsPanelComponent} from './tabs-panel/tabs-panel.component';
import {AppComponent} from './app.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/orders', pathMatch: 'full' },
//   { path: 'orders', component: MainPageComponent },
//    { path: 'detail/:id', component: MainPageComponent }
// ];

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: TabsPanelComponent },
  { path: 'my-orders', component: MainPageComponent },
  { path: 'second', component: MainPageComponent },
  { path: 'third', component: MainPageComponent },
  { path: 'fourth', component: MainPageComponent },
  { path: 'fifth', component: MainPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
