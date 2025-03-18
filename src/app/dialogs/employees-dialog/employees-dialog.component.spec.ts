import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesDialogComponent } from './employees-dialog.component';

describe('EmployeesDialogComponent', () => {
  let component: EmployeesDialogComponent;
  let fixture: ComponentFixture<EmployeesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
