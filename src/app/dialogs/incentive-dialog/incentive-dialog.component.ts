import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BackendService } from '../../services/backend.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-incentive-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatDatepickerModule, MatSelectModule, FormsModule, MatDialogActions, MatButtonModule, MatDialogClose],
  templateUrl: './incentive-dialog.component.html',
  styleUrl: './incentive-dialog.component.css'
})
export class IncentiveDialogComponent {
  today = new Date();

  readonly dialogRef = inject(MatDialogRef<IncentiveDialogComponent>);
  readonly incentive = signal(0);
  readonly ssn = signal("");

  constructor(private backendService: BackendService) { }

  submitIncentive(formData: NgForm): void {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  clearData(): void {
    this.ssn.set("");
  }
}
