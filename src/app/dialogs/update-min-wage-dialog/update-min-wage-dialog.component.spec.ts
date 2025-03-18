import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMinWageDialogComponent } from './update-min-wage-dialog.component';

describe('UpdateMinWageDialogComponent', () => {
  let component: UpdateMinWageDialogComponent;
  let fixture: ComponentFixture<UpdateMinWageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMinWageDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMinWageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
