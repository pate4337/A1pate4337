import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MaterialModule } from './modules/material-ui.module'; 
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { HeaderPate4337Component } from './header-pate4337/header-pate4337.component';
import { Pate4337AboutComponent } from './pate4337-about/pate4337-about.component';
import { Pate4337CountryComponent } from './pate4337-country/pate4337-country.component';
import { Pate4337PicsComponent } from './pate4337-pics/pate4337-pics.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderPate4337Component,
    Pate4337AboutComponent,
    Pate4337CountryComponent,
    Pate4337PicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,  
    ReactiveFormsModule, 
    FormsModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }