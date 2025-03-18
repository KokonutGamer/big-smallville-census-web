import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-person-dialog',
  imports: [MatDialogTitle, MatDialogContent, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatInputModule],
  templateUrl: './add-person-dialog.component.html',
  styleUrl: './add-person-dialog.component.css'
})
export class AddPersonDialogComponent {
  today = new Date();
}
