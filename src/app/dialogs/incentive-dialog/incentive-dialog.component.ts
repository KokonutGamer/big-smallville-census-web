import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-incentive-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatDatepickerModule, MatSelectModule],
  templateUrl: './incentive-dialog.component.html',
  styleUrl: './incentive-dialog.component.css'
})
export class IncentiveDialogComponent {
  today = new Date();
}
