import {Inject, Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  username: string;
  gender: string;
  title: string;
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
    return this.httpClient.post<User>('api/users', data);
  }
}
