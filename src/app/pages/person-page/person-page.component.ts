import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IncentiveDialogComponent } from '../../dialogs/incentive-dialog/incentive-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { AddPersonDialogComponent } from '../../dialogs/add-person-dialog/add-person-dialog.component';
import { BackendService } from '../../services/backend.service';
import { EMPTY, Observable } from 'rxjs';
import { Person } from '../../parameters/person';
import { ParentsDialogComponent } from '../../dialogs/parents-dialog/parents-dialog.component';

@Component({
  selector: 'app-person-page',
  imports: [MatButtonModule],
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css'
})
export class PersonPageComponent {
  readonly dialog = inject(MatDialog);
  persons$: Observable<Person[]> = EMPTY;

  constructor(private backendService: BackendService) { }

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

  getNeedyParents(): void {
    const buttonElement = document.activeElement as HTMLElement;
    buttonElement.blur();

    this.persons$ = this.backendService.getNeedyParents();
    this.persons$.subscribe((response) => {
      this.dialog.open(ParentsDialogComponent, { data: response });
    });
    // this.backendService.getNeedyParents().subscribe((response) => {
    //   console.log(response);

    // });
  }
}
