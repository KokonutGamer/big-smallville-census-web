import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdPageComponent } from './household-page.component';

describe('HouseholdPageComponent', () => {
  let component: HouseholdPageComponent;
  let fixture: ComponentFixture<HouseholdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
