import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-update-min-wage-dialog',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatDialogActions, MatInputModule, MatButtonModule],
  templateUrl: './update-min-wage-dialog.component.html',
  styleUrl: './update-min-wage-dialog.component.css'
})
export class UpdateMinWageDialogComponent {
  readonly businessName = model('');
  readonly newWage = model(0);

  constructor(private backendService: BackendService) { }

  submitNewMinWage(): void {
    this.backendService.updateMinWage(this.businessName(), this.newWage()).subscribe((response) => {
      // TODO updated message
    });
  }
}
