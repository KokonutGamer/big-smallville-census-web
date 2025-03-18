import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AverageIncomeDialogComponent } from '../../dialogs/average-income-dialog/average-income-dialog.component';
import { UpdateMinWageDialogComponent } from '../../dialogs/update-min-wage-dialog/update-min-wage-dialog.component';
import { EmployeesDialogComponent } from '../../dialogs/employees-dialog/employees-dialog.component';

@Component({
  selector: 'app-business-page',
  imports: [MatButtonModule],
  templateUrl: './business-page.component.html',
  styleUrl: './business-page.component.css'
})
export class BusinessPageComponent {
  readonly dialog = inject(MatDialog);

  openAverageIncomeDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(AverageIncomeDialogComponent);
  }

  openUpdateMinWageDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(UpdateMinWageDialogComponent);
  }

  openEmployeesDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(EmployeesDialogComponent);
  }
}
