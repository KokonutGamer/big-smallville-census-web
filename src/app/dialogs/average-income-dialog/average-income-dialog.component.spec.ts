import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageIncomeDialogComponent } from './average-income-dialog.component';

describe('AverageIncomeDialogComponent', () => {
  let component: AverageIncomeDialogComponent;
  let fixture: ComponentFixture<AverageIncomeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageIncomeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageIncomeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
