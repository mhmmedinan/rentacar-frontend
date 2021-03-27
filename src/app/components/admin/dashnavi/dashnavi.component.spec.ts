import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashnaviComponent } from './dashnavi.component';

describe('DashnaviComponent', () => {
  let component: DashnaviComponent;
  let fixture: ComponentFixture<DashnaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashnaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashnaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
