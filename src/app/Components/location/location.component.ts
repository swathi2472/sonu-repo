import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
  
})
export class LocationComponent implements OnInit {
  
 url= 'https://api.openweathermap.org/data/2.5/weather';
apikey='0d9227ae7900c676bad0ec6ce8fceade';
  constructor(private http: HttpClient) 
  { }

 
 getWeatherDataByCoords(lat,lon)
{
    let params=new HttpParams()
    .set('lat',lat)
    .set('lon',lon)
    .set('units','imperial')
    .set('appid',this.apikey)
    
    return this.http.get(this.url,{ params });
  }
  
 getWeatherDataByCityName(city:string)
 {
     let params=new HttpParams()
     .set('q',city)
     .set('units','imperial')
     .set('appid',this.apikey)
     
     return this.http.get(this.url,{ params });
   }

  ngOnInit(): void {
   
  }

  }


