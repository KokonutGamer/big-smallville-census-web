import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-average-income-dialog',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatDialogActions, MatInputModule, MatButtonModule],
  templateUrl: './average-income-dialog.component.html',
  styleUrl: './average-income-dialog.component.css'
})
export class AverageIncomeDialogComponent {
  readonly businessName = model('');
  readonly averageIncome = model(0);

  constructor(private backendService: BackendService) {}

  submitBusinessName(): void {
    this.backendService.getAverageIncome(this.businessName()).subscribe((response) => {
      this.averageIncome.set(response.avgIncome);
    });
  }
}
