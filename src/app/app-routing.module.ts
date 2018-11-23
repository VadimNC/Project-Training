import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {TabsPanelComponent} from './tabs-panel/tabs-panel.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
  { path: 'heroes', component: MainPageComponent },
   { path: 'detail/:id', component: MainPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
