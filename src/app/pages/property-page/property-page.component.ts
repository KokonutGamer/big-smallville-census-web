import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaxPercentageDialogComponent } from '../../dialogs/update-tax-percentage-dialog/update-tax-percentage-dialog.component';

@Component({
  selector: 'app-property-page',
  imports: [MatButtonModule],
  templateUrl: './property-page.component.html',
  styleUrl: './property-page.component.css'
})
export class PropertyPageComponent {
  readonly dialog = inject(MatDialog);

  openUpdateTaxPercentageDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(UpdateTaxPercentageDialogComponent);
  }
}
