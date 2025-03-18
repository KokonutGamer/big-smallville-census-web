import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { UpdateTaxPercentageDialogComponent } from '../../dialogs/update-tax-percentage-dialog/update-tax-percentage-dialog.component';
import { EMPTY, Observable } from 'rxjs';
import { Property } from '../../parameters/property';
import { BackendService } from '../../services/backend.service';
import { PropertiesDialogComponent } from '../../dialogs/properties-dialog/properties-dialog.component';

@Component({
  selector: 'app-property-page',
  imports: [MatButtonModule],
  templateUrl: './property-page.component.html',
  styleUrl: './property-page.component.css'
})
export class PropertyPageComponent {
  readonly dialog = inject(MatDialog);
  properties$: Observable<Property[]> = EMPTY;

  constructor(private backendService: BackendService) { }

  openUpdateTaxPercentageDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();
    this.dialog.open(UpdateTaxPercentageDialogComponent);
  }

  openPropertiesDialog(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();

    this.properties$ = this.backendService.getProperties();
    this.properties$.subscribe((response) => {
      this.dialog.open(PropertiesDialogComponent, { data: response });
    });
  }
}
