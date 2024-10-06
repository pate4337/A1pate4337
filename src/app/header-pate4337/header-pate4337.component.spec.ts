import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPate4337Component } from './header-pate4337.component';

describe('HeaderPate4337Component', () => {
  let component: HeaderPate4337Component;
  let fixture: ComponentFixture<HeaderPate4337Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPate4337Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderPate4337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
