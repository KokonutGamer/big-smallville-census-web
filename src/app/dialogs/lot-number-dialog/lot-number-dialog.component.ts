import { Component } from '@angular/core';
import { MatDialogActions, MatDialogClose, MatDialogContent } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-lot-number-dialog',
  imports: [MatDialogContent, MatFormFieldModule, MatDialogActions, MatDialogClose],
  templateUrl: './lot-number-dialog.component.html',
  styleUrl: './lot-number-dialog.component.css'
})
export class LotNumberDialogComponent {
  submitAddress(): void {
    // TODO implement
  }
}
