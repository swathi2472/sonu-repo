//import { Component } from '@angular/core';
import { Component, OnInit, ViewEncapsulation, NgZone, enableProdMode } from '@angular/core'; 

enableProdMode();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weatherwidget tutorial';
}
