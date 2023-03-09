import { ComponentFixture, TestBed } from '@angular/core/testing';

import { countryComponent } from './country.component';

describe('countryComponent', () => {
  let component: countryComponent;
  let fixture: ComponentFixture<countryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ countryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(countryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
