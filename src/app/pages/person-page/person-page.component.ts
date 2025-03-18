import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncentiveDialogComponent } from '../../dialogs/incentive-dialog/incentive-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { AddPersonDialogComponent } from '../../dialogs/add-person-dialog/add-person-dialog.component';

@Component({
  selector: 'app-person-page',
  imports: [MatButtonModule],
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css'
})
export class PersonPageComponent {
  readonly dialog = inject(MatDialog);

  openIncentiveCalculator(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(IncentiveDialogComponent);
  }

  openAddPersonDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(AddPersonDialogComponent);
  }
}
