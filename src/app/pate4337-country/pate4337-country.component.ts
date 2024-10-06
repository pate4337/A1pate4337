import { Component, Input } from '@angular/core';
import { Pate4337Country } from '../Pate4337Personal';

@Component({
  selector: 'app-pate4337-country',
  templateUrl: './pate4337-country.component.html',
  styleUrls: ['./pate4337-country.component.css']
})
export class Pate4337CountryComponent {
  @Input() countryData!: Pate4337Country; // Make sure this line is present
}