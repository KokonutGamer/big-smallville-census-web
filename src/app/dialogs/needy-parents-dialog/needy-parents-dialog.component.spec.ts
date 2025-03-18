import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeedyParentsDialogComponent } from './needy-parents-dialog.component';

describe('NeedyParentsDialogComponent', () => {
  let component: NeedyParentsDialogComponent;
  let fixture: ComponentFixture<NeedyParentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NeedyParentsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NeedyParentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
