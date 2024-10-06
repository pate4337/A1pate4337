import { Component, Input } from '@angular/core';
import { Pate4337Personal } from '../Pate4337Personal';

@Component({
  selector: 'app-header-pate4337',
  templateUrl: './header-pate4337.component.html',
  styleUrls: ['./header-pate4337.component.css']
})
export class HeaderPate4337Component {
  @Input() pate4337Child!: Pate4337Personal; 
  currentDate = new Date();
  headerBackgroundColor = 'lightgray'; // Add this line
}