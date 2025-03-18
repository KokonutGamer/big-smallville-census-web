import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaxPercentageDialogComponent } from './update-tax-percentage-dialog.component';

describe('UpdateTaxPercentageDialogComponent', () => {
  let component: UpdateTaxPercentageDialogComponent;
  let fixture: ComponentFixture<UpdateTaxPercentageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaxPercentageDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaxPercentageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
