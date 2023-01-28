import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  Weather(): Observable<any> {
    return this.http.get(
      `https://api.openweathermap.org/data/2.5/weather?q=madagascar&units=metric&appid=efcc998c6db4f0a1443ece51a53919f3&lang=pt_br`
    );
  }
}