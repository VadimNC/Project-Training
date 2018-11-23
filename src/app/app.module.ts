import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {TabsPanelComponent} from './tabs-panel/tabs-panel.component';
import {MainPageComponent} from './main-page/main-page.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TabsPanelComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
