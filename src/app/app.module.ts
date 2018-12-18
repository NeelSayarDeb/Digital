import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderGlanceComponent } from './header-glance/app.header-glance.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderGlanceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
