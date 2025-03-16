import { Component, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../services/backend.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { IncentiveDialogComponent } from '../../dialogs/incentive-dialog/incentive-dialog.component';

@Component({
  selector: 'app-person-page',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css'
})
export class PersonPageComponent {
  readonly dialog = inject(MatDialog);

  constructor(private backendService: BackendService) {}

  openIncentiveCalculator(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    const dialogRef = this.dialog.open(IncentiveDialogComponent);
  }

  submitIncentive(formData: NgForm) {
    // this.ssn = formData.value.ssn;
    // this.backendService.calculateIncentives(this.ssn).subscribe((response) => {
    //   console.log(response);
    // });
  }
}
