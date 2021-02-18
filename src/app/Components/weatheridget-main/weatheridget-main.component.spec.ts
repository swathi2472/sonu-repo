import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatheridgetMainComponent } from './weatheridget-main.component';

describe('WeatheridgetMainComponent', () => {
  let component: WeatheridgetMainComponent;
  let fixture: ComponentFixture<WeatheridgetMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatheridgetMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatheridgetMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
