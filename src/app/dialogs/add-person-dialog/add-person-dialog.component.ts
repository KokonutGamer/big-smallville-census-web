import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BackendService } from '../../services/backend.service';

@Component({
  selector: 'app-add-person-dialog',
  imports: [FormsModule, MatDialogTitle, MatDialogContent, MatFormFieldModule, MatDatepickerModule, MatSelectModule, MatInputModule, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './add-person-dialog.component.html',
  styleUrl: './add-person-dialog.component.css'
})
export class AddPersonDialogComponent {
  today = new Date();
  readonly firstName = model('');
  readonly lastName = model('');
  readonly ssn = model('');
  readonly lotNumber = model('');
  readonly maritalStatus = model('');
  readonly birthDate = model<Date>();
  readonly email = model('');
  readonly phone = model('');

  constructor(private backendService: BackendService) { }

  submitPerson(): void {
    let maritalStatusId = '';
    if (this.maritalStatus() === "single") {
      maritalStatusId = 'S';
    } else if (this.maritalStatus() === "married") {
      maritalStatusId = 'M';
    } else if (this.maritalStatus() === "divorced") {
      maritalStatusId = 'D';
    } else if (this.maritalStatus() === "widowed") {
      maritalStatusId = 'W';
    }
    console.log("maritalStatusId = " , maritalStatusId);
    this.backendService.addPerson(this.ssn(), maritalStatusId, this.lotNumber(), this.firstName(), this.lastName(), this.birthDate()!, this.email(), this.phone()).subscribe((response) => {
      console.log("Successfully added person!");
    });
  }
}
