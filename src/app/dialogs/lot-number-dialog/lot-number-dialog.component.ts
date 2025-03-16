import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-lot-number-dialog',
  imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatDialogClose, MatButtonModule, MatDialogTitle, MatInputModule],
  templateUrl: './lot-number-dialog.component.html',
  styleUrl: './lot-number-dialog.component.css'
})
export class LotNumberDialogComponent {
  submitAddress(): void {
    // TODO implement
  }
}
