import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRentalComponent } from './user-rental.component';

describe('UserRentalComponent', () => {
  let component: UserRentalComponent;
  let fixture: ComponentFixture<UserRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
