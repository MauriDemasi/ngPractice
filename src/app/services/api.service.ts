import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class ApiService {


  baseUrl: string= 'https://reqres.in/api/'
  constructor( private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'users');
  }


}
