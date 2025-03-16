import { Component, inject, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BackendService } from '../../services/backend.service';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-incentive-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatDatepickerModule, MatSelectModule, FormsModule, MatDialogActions, MatButtonModule, MatDialogClose, MatInputModule],
  templateUrl: './incentive-dialog.component.html',
  styleUrl: './incentive-dialog.component.css'
})
export class IncentiveDialogComponent {
  today = new Date();

  readonly dialogRef = inject(MatDialogRef<IncentiveDialogComponent>);
  readonly incentive = model();
  readonly ssn = model('');

  constructor(private backendService: BackendService) { }

  submitIncentive(): void {
    this.backendService.calculateIncentives(this.ssn()).subscribe((response) => {
      this.incentive.set(response.percentIncentive);
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
