import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarUpdateDeleteComponent } from './car-update-delete.component';

describe('CarUpdateDeleteComponent', () => {
  let component: CarUpdateDeleteComponent;
  let fixture: ComponentFixture<CarUpdateDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarUpdateDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarUpdateDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
