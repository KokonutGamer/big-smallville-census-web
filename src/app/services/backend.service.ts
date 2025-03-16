import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LotNumberParameters } from '../parameters/lot-number-parameters';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) { }

  // Function to calculate incentives for a person
  calculateIncentives(ssn: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/persons/incentive?ssn=${encodeURI(ssn)}`);
  }

  getLotNumber(parameters: LotNumberParameters): Observable<any> {
    return this.http.get(`
      ${this.baseUrl}/persons/lot-number?
      street=${parameters.street}&
      zipcode=${parameters.zipcode}&
      house-number=${parameters.houseNumber}&
      district=${parameters.district}
      ${parameters.aparmentNumber ? `&apartment-number=${parameters.aparmentNumber}` : ''}`);
  }
}
