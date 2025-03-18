import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BackendService } from '../../services/backend.service';
import { Person } from '../../parameters/person';
import { EMPTY, Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-household-members-dialog',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatDialogActions, MatInputModule, MatButtonModule, MatTableModule],
  templateUrl: './household-members-dialog.component.html',
  styleUrl: './household-members-dialog.component.css'
})
export class HouseholdMembersDialogComponent {
  readonly lotNumber = model('');
  readonly limit = model('');
  persons$: Observable<Person[]> = EMPTY;
  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'maritalStatus', 'email', 'phone'];
  dataSource = new MatTableDataSource<Person>();

  constructor(private backendService: BackendService) {}

  submitLotNumber():void {
    this.persons$ = this.backendService.getHouseholdMembers(this.lotNumber(), this.limit());
    this.persons$.subscribe((response) => {
      console.log(response);
      this.dataSource.data = response;
    });
  }
}
