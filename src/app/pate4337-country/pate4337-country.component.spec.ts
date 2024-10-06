import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pate4337CountryComponent } from './pate4337-country.component';

describe('Pate4337CountryComponent', () => {
  let component: Pate4337CountryComponent;
  let fixture: ComponentFixture<Pate4337CountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pate4337CountryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pate4337CountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
