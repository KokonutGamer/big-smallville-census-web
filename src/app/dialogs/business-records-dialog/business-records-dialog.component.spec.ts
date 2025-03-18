import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessRecordsDialogComponent } from './business-records-dialog.component';

describe('BusinessRecordsDialogComponent', () => {
  let component: BusinessRecordsDialogComponent;
  let fixture: ComponentFixture<BusinessRecordsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessRecordsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessRecordsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
