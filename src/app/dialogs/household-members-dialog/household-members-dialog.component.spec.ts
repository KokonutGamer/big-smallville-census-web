import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdMembersDialogComponent } from './household-members-dialog.component';

describe('HouseholdMembersDialogComponent', () => {
  let component: HouseholdMembersDialogComponent;
  let fixture: ComponentFixture<HouseholdMembersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdMembersDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdMembersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
