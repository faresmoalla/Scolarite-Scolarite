import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  login(username: string, password: string) {
    return this.http.post<any>(`http://localhost:3000/api/auth/login`, { username, password })
  }

  




}
