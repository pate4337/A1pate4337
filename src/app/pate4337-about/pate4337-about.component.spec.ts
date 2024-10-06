import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pate4337AboutComponent } from './pate4337-about.component';

describe('Pate4337AboutComponent', () => {
  let component: Pate4337AboutComponent;
  let fixture: ComponentFixture<Pate4337AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pate4337AboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pate4337AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
