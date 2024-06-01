import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl: string = 'https://localhost:7037';

  constructor(private httpClient: HttpClient) { }

  getMessage() : Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}`);
  }
}
