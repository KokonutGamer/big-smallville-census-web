import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LotNumberDialogComponent } from '../../dialogs/lot-number-dialog/lot-number-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { HouseholdMembersDialogComponent } from '../../dialogs/household-members-dialog/household-members-dialog.component';

@Component({
  selector: 'app-household-page',
  imports: [MatButtonModule],
  templateUrl: './household-page.component.html',
  styleUrl: './household-page.component.css'
})
export class HouseholdPageComponent {
  readonly dialog = inject(MatDialog);

  openLotNumberDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(LotNumberDialogComponent);
  }

  openHouseholdMembersDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(HouseholdMembersDialogComponent);
  }
}
