import { Component, Input } from '@angular/core';
import { Pate4337Personal, Pate4337Country } from '../Pate4337Personal';

@Component({
  selector: 'app-pate4337-pics',
  templateUrl: './pate4337-pics.component.html',
  styleUrls: ['./pate4337-pics.component.css']
})
export class Pate4337PicsComponent {
  @Input() personalData!: Pate4337Personal;
  @Input() countryData!: Pate4337Country;
  myStudentNumber = 991681546; 
  myCountryCode = 124; 
}