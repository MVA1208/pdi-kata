import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FilmService {
  data = '../../assets/data_short.csv';

  constructor(private http: HttpClient) {}

  getInfo() {
    return this.http.get(this.data, { responseType: 'text' });
  }
}
