import { Component, model } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from '../../services/backend.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lot-number-dialog',
  imports: [FormsModule, MatDialogContent, MatFormFieldModule, MatDialogActions, MatDialogClose, MatButtonModule, MatDialogTitle, MatInputModule],
  templateUrl: './lot-number-dialog.component.html',
  styleUrl: './lot-number-dialog.component.css'
})
export class LotNumberDialogComponent {
  readonly street = model('');
  readonly zipcode = model('');
  readonly houseNumber = model('');
  readonly apartmentNumber = model('');
  readonly district = model('');
  readonly lotNumber = model('');

  constructor(private backendService: BackendService) { }

  submitAddress(): void {
    console.log(this.street());
    this.backendService.getLotNumber(this.street(), this.zipcode(), this.houseNumber(), this.district(), this.apartmentNumber()).subscribe((response) => {
      console.log(response);
      // this.lotNumber.set(response);
    });
  }
}
