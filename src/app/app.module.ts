import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatheridgetMainComponent } from './Components/weatheridget-main/weatheridget-main.component';
import { LocationComponent } from './Components/location/location.component';



@NgModule({
  declarations: [
    AppComponent,
    WeatheridgetMainComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
