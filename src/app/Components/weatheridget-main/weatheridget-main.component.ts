import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { WeatherService } from 'src/app/weather.service';
//import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-weatheridget-main',
  templateUrl: './weatheridget-main.component.html',
  styleUrls: ['./weatheridget-main.component.css']
})
export class WeatheridgetMainComponent implements OnInit {

  lat;
  lon;
  weather;
  val;
  constructor(private WeatherService:WeatherService)//private locationComponent: LocationComponent)
     { }

  ngOnInit() {
   // this.locationComponent.getLocationDataByCoords(35,139).subscribe(console.log)
    this.getLocation();
    
  }
  getLocation(){
    if("geolocation" in navigator){
      navigator.geolocation.watchPosition((success)=>{
       this.lat=success.coords.latitude;
        this.lon=success.coords.longitude;
  
       this.WeatherService.getWeatherDataByCoords(this.lat,this.lon).subscribe(data=>{
        this.weather=data;

       });
      })
    }
  }
  getCity(city)
  {
   this.WeatherService.getWeatherDataByCityName(city).subscribe(data=>{
     this.weather=data;
    })
  }
 
}
 

  

