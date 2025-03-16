import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotNumberDialogComponent } from './lot-number-dialog.component';

describe('LotNumberDialogComponent', () => {
  let component: LotNumberDialogComponent;
  let fixture: ComponentFixture<LotNumberDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LotNumberDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotNumberDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
