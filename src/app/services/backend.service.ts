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

  /* 
  ==================== PERSON ====================
  */

  // Function to calculate incentives for a person
  calculateIncentives(ssn: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/persons/incentive?ssn=${encodeURI(ssn)}`);
  }

  addPerson(ssn: string, maritalStatusId: string, lotNumber: string, firstName: string, lastName: string, birthDate: Date, email?: string, phone?: string): Observable<any> {
    // TODO implement
    return this.http.put(``, null);
  }

  getNeedyParents(): Observable<any> {
    // TODO implement
    return this.http.get(``);
  }

  /* 
  ==================== HOUSEHOLD ====================
  */
  getLotNumber(parameters: LotNumberParameters): Observable<any> {
    return this.http.get(`
      ${this.baseUrl}/persons/lot-number?
      street=${encodeURI(parameters.street)}&
      zipcode=${encodeURI(parameters.zipcode)}&
      house-number=${encodeURI(parameters.houseNumber)}&
      district=${encodeURI(parameters.district)}
      ${parameters.aparmentNumber ? `&apartment-number=${encodeURI(parameters.aparmentNumber)}` : ''}`);
  }

  getHouseholdMembers(lotNumber: string, limit: string): Observable<any> {
    // TODO implement
    return this.http.get(``);
  }

  /* 
  ==================== BUSINESS ====================
  */

  getAverageIncome(businessName: string): Observable<any> {
    // TODO implement
    return this.http.get(``);
  }

  getBusinessRecords(businessName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/businesses/listBusRecords?businessName=${encodeURI(businessName)}`);
  }

  updateMinWage(businessName: string, newWage: number): Observable<any> {
    // TODO implement put mapping in API
    const body = {};
    return this.http.put(`${this.baseUrl}/businesses/updateMinWage?businessName=${encodeURI(businessName)}&newWage=${encodeURI(newWage.toString())}`, body);
  }

  getEmployees(businessName: string): Observable<any> {
    // TODO implement
    return this.http.get(``);
  }

  /* 
  ==================== PROPERTIES ====================
  */

  updateTaxPercentage(propertyTypeName: string, newTaxPercentage: number): Observable<any> {
    // TODO implement
    const body = {};
    return this.http.put(``, body);
  }

  getProperties(): Observable<any> {
    // TODO implement
    return this.http.get(``);
  }

}
