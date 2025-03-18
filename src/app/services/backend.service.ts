import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, first, map, Observable, tap, throwError } from 'rxjs';
import { Person } from '../parameters/person';
import { Employee } from '../parameters/employee';

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
    const year = birthDate.getFullYear();
    const month = String(birthDate.getMonth() + 1).padStart(2, '0');
    const day = String(birthDate.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}-${year}`
    return this.http.put(`${this.baseUrl}/persons/add` +
      `?ssn=${encodeURI(ssn)}` +
      `&maritalStatusID=${encodeURI(maritalStatusId)}` +
      `&lotNumber=${encodeURI(lotNumber)}` +
      `&firstName=${encodeURI(firstName)}` +
      `&lastName=${encodeURI(lastName)}` +
      `&birthDate=${encodeURI(formattedDate)}` +
      `${email ? `&email=${encodeURI(email)}` : ''}` +
      `${phone ? `&phone=${encodeURI(phone)}` : ''}`, null);
  }

  getNeedyParents(): Observable<Person[]> {
    return this.http.get<any>(`${this.baseUrl}/persons/needyParents`).pipe(
      map(response => {
        console.log('Raw API Response:', response);

        // Ensure response is valid
        if (!response || !Array.isArray(response.parents)) {
          console.error('Invalid response format:', response);
          throw new Error('API response does not contain parents array');
        }

        // Map the data to match Person[]
        return response.parents.map((item: any) => ({
          firstName: item.firstName || '',
          lastName: item.lastName || '',
          ssn: item.ssn || '',
          birthDate: item.birthDate || '',
          maritalStatus: item.maritalStatus || '',
          email: item.email || '',
          phone: item.phone || ''
        }));
      })
    );
  }

  /* 
  ==================== HOUSEHOLD ====================
  */
  getLotNumber(street: string, zipcode: string, houseNumber: string, district: string, apartmentNumber?: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/households/lot-number` +
      `?street=${encodeURI(street)}` +
      `&zipcode=${encodeURI(zipcode)}` +
      `&house-number=${encodeURI(houseNumber)}` +
      `&district=${encodeURI(district)}` +
      `${apartmentNumber ? `&apartment-number=${encodeURI(apartmentNumber)}` : ''}`);
  }

  getHouseholdMembers(lotNumber: string, limit: string): Observable<Person[]> {
    return this.http.get<any>(`${this.baseUrl}/households/members?lotNumber=${encodeURI(lotNumber)}&limit=${encodeURI(limit)}`).pipe(
      map(response => {
        console.log('Raw API Response:', response);

        // Ensure response is valid
        if (!response || !Array.isArray(response.householdMembers)) {
          console.error('Invalid response format:', response);
          throw new Error('API response does not contain parents array');
        }

        // Map the data to match Person[]
        return response.householdMembers.map((item: any) => ({
          firstName: item.firstName || '',
          lastName: item.lastName || '',
          ssn: item.ssn || '',
          birthDate: item.birthDate || '',
          maritalStatus: item.maritalStatus || '',
          email: item.email || '',
          phone: item.phone || ''
        }));
      })
    );
  }

  /* 
  ==================== BUSINESS ====================
  */

  getAverageIncome(businessName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/businesses/avgincome?businessName=${encodeURI(businessName)}`);
  }

  // TODO wait on API change
  getBusinessRecords(businessName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/businesses/listBusRecords?businessName=${encodeURI(businessName)}`);
  }

  updateMinWage(businessName: string, newWage: number): Observable<any> {
    return this.http.put(`${this.baseUrl}/businesses/updateMinWage?businessName=${encodeURI(businessName)}` +
      `&newWage=${encodeURI(newWage.toString())}`, null);
  }

  getEmployees(businessName: string, incomeLimit: number): Observable<Employee[]> {
    return this.http.get<any>(`${this.baseUrl}/businesses/listEmployees` +
      `?businessName=${encodeURI(businessName)}` +
      `&incomeLimit=${encodeURI(incomeLimit.toString())}`).pipe(
        map(response => {
          console.log('Raw API Response:', response);

          // Ensure response is valid
          if (!response || !Array.isArray(response.employees)) {
            console.error('Invalid response format:', response);
            throw new Error('API response does not contain parents array');
          }

          // Map the data to match Employee[]
          return response.employees.map((item: any) => ({
            income: item.income || 0,
            firstName: item.firstName || '',
            lastName: item.lastName || ''
          }));
        })
      );
  }

  /* 
  ==================== PROPERTIES ====================
  */

  updateTaxPercentage(propertyTypeName: string, newTaxPercentage: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`${this.baseUrl}/properties/${encodeURI(propertyTypeName)}/taxPercentage`, newTaxPercentage, { headers });
  }

  getProperties(): Observable<any> {
    // TODO implement
    return this.http.get(``);
  }

}
