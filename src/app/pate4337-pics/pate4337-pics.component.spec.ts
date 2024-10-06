import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pate4337PicsComponent } from './pate4337-pics.component';

describe('Pate4337PicsComponent', () => {
  let component: Pate4337PicsComponent;
  let fixture: ComponentFixture<Pate4337PicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Pate4337PicsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Pate4337PicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
