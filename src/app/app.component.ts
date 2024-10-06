import { Component } from '@angular/core';
import { Pate4337Personal, Pate4337Country } from './Pate4337Personal'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  personalInfo: Pate4337Personal = new Pate4337Personal();
  countryInfo: Pate4337Country = new Pate4337Country();
  PERpate4337: Pate4337Personal = new Pate4337Personal(); 
  CTRYpate4337: Pate4337Country = new Pate4337Country();
}