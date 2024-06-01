import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from '../../models/login-model';
import { Observable } from 'rxjs';
import { RegisterModel } from '../../models/register-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'https://localhost:7037';

  constructor(private httpClient: HttpClient) { }

  // APIs
  onLogin(login: LoginModel) : Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/login`, login);
  }

  onRegister(register: RegisterModel) : Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/register`, register);
  }

  // Method Helpers
  setToken(token: string) : void {
    localStorage.setItem("token", token);
  }

  getToken() : string | null {
    return localStorage.getItem("token");
  }

  isLoggedIn() : boolean {
    return !!localStorage.getItem("token");
  }
}
