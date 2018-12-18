import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderDataService } from './services/header-data.service';
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
    HttpClientModule,
    CalendarModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [
    HeaderDataService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
