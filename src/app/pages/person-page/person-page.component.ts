import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { BackendService } from '../../services/backend.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-page',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './person-page.component.html',
  styleUrl: './person-page.component.css'
})
export class PersonPageComponent {
  ssn: string;

  constructor(private backendService: BackendService) {
    this.ssn = "";
  }

  submitIncentive(formData: NgForm) {
    console.log(formData.value)
  }
}
