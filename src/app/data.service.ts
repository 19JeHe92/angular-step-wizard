import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  userID: string;
  gender: string;
  first: string;
  last: string;
  phone: number;
  email: string;
  dateOfBirth: string;
  address: {
    street: string;
    number: string;
    zipCode: string;
    city: string;
    country: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  sendData(data): Observable<User> {
    const testData = {
      id: 3,
      userID: 'USER_003',
      gender: 'female',
      first: 'Tina',
      last: 'Tustermann',
      phone: '09876543210',
      email: 'tina.tustermann@mail.com',
      dateOfBirth: '01.01.1970',
      address: {
        street: 'Mustergasse',
        number: '99',
        zipCode: '98765',
        city: 'Musterstadt',
        country: 'Deutschland'
      }
    };
    return this.httpClient.post<User>('api/users', testData);
  }
}
