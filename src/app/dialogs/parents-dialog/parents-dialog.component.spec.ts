import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsDialogComponent } from './parents-dialog.component';

describe('ParentsDialogComponent', () => {
  let component: ParentsDialogComponent;
  let fixture: ComponentFixture<ParentsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
