import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { EMPTY, Observable } from 'rxjs';
import { BusinessRecord } from '../../parameters/business-record';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-business-records-dialog',
  imports: [MatDialogModule, MatFormFieldModule, FormsModule, MatDialogActions, MatInputModule, MatButtonModule, MatTableModule],
  templateUrl: './business-records-dialog.component.html',
  styleUrl: './business-records-dialog.component.css'
})
export class BusinessRecordsDialogComponent {
  readonly businessName = model('');
  records$: Observable<BusinessRecord[]> = EMPTY;
  displayedColumns: string[] = ['revenue', 'expenses', 'profit', 'taxesPaid', 'propertyTaxes', 'year', 'quarter'];
  dataSource = new MatTableDataSource<BusinessRecord>();

  constructor(private backendService: BackendService) {}

  submitBusinessName(): void {
    this.records$ = this.backendService.getBusinessRecords(this.businessName());
    this.records$.subscribe((response) => {
      console.log(response);
      this.dataSource.data = response;
    });
  }
}
