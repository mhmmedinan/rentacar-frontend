import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRentComponent } from './home-rent.component';

describe('HomeRentComponent', () => {
  let component: HomeRentComponent;
  let fixture: ComponentFixture<HomeRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
