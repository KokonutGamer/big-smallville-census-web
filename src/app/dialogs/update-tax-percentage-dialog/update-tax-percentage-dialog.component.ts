import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-update-tax-percentage-dialog',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatDialogActions, MatInputModule, MatButtonModule],
  templateUrl: './update-tax-percentage-dialog.component.html',
  styleUrl: './update-tax-percentage-dialog.component.css'
})
export class UpdateTaxPercentageDialogComponent {
  readonly propertyName = model('');
  readonly newTaxPercentage = model(0);

  constructor(private backendService: BackendService) { }

  submitNewTaxPercentage(): void {
    this.backendService.updateTaxPercentage(this.propertyName(), this.newTaxPercentage()).subscribe((response) => {
      // TODO updated message
      console.log(response);
    });
  }
}
