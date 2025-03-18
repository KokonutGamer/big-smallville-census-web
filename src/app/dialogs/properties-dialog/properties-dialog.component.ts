import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { Property } from '../../parameters/property';

@Component({
  selector: 'app-properties-dialog',
  imports: [MatTableModule, MatDialogActions, MatDialogModule, MatButtonModule],
  templateUrl: './properties-dialog.component.html',
  styleUrl: './properties-dialog.component.css'
})
export class PropertiesDialogComponent {
  displayedColumns: string[] = ['name', 'taxPercentage'];
  dataSource: Property[];

  constructor(
    public dialogRef: MatDialogRef<PropertiesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Property[]
  ) {
    this.dataSource = data;
  }
}
