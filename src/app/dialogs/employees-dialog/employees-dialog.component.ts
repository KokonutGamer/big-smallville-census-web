import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { BackendService } from '../../services/backend.service';
import { EMPTY, Observable } from 'rxjs';
import { Employee } from '../../parameters/employee';

@Component({
  selector: 'app-employees-dialog',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatDialogActions, MatInputModule, MatButtonModule, MatTableModule],
  templateUrl: './employees-dialog.component.html',
  styleUrl: './employees-dialog.component.css'
})
export class EmployeesDialogComponent {
  readonly businessName = model('');
  readonly incomeLimit = model(1000000);
  employees$: Observable<Employee[]> = EMPTY;
  displayedColumns: string[] = ['firstName', 'lastName', 'income'];
  dataSource = new MatTableDataSource<Employee>();

  constructor(private backendService: BackendService) {}

  submitBusinessName(): void {
    this.employees$ = this.backendService.getEmployees(this.businessName(), this.incomeLimit());
    this.employees$.subscribe((response) => {
      console.log(response);
      this.dataSource.data = response;
    });
  }
}
