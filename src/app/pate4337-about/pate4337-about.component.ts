import { Component, Input } from '@angular/core';
import { Pate4337Personal, Pate4337Country } from '../Pate4337Personal';

@Component({
  selector: 'app-pate4337-about',
  templateUrl: './pate4337-about.component.html',
  styleUrls: ['./pate4337-about.component.css']
})
export class Pate4337AboutComponent {
  @Input() pate4337Data!: Pate4337Personal;
  @Input() pate4337CountryData!: Pate4337Country; 
}