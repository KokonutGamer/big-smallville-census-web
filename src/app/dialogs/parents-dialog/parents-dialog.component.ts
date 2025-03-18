import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Person } from '../../parameters/person';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-parents-dialog',
  imports: [MatTableModule, MatDialogActions, MatDialogModule, MatButtonModule],
  templateUrl: './parents-dialog.component.html',
  styleUrl: './parents-dialog.component.css'
})
export class ParentsDialogComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'ssn', 'birthDate', 'maritalStatus', 'email', 'phone'];
  dataSource: Person[];

  constructor(
    public dialogRef: MatDialogRef<ParentsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Person[]
  ) {
    this.dataSource = data; // Pass the data into the table
  }
}
