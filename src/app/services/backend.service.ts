import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseUrl = 'http://localhost:8080/api/v1';
  
  constructor(private http: HttpClient) { }

  // Function to calculate incentives for a person
  calculateIncentives(ssn: string): Observable<Number[]> {
    return this.http.get<Number[]>(`${this.baseUrl}/persons/incentive?ssn=${encodeURI(ssn)}`);
  }
}
