import { Component } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { BackendService } from '../../services/backend.service';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-person-page',
  imports: [FormsModule, ReactiveFormsModule, CommonModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css'
})
export class PersonPageComponent {
  today = new Date();
  ssn: string;

  // create person parameters
  createSSN: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  constructor(private backendService: BackendService) {
    this.ssn = "";
    this.createSSN = "";
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.phone = "";
  }

  submitNewPerson(formData: NgForm) {

  }

  submitIncentive(formData: NgForm) {
    this.ssn = formData.value.ssn;
    this.backendService.calculateIncentives(this.ssn).subscribe((response) => {
      console.log(response);
    });
  }
}
