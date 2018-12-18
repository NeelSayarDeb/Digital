import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderGlanceComponent } from './header-glance/app.header-glance.component';
import { AppCalendarComponent } from './calendar/app-calendar.component';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderGlanceComponent,
    AppCalendarComponent
  ],
  imports: [
    BrowserModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
