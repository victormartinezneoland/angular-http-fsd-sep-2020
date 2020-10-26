import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) { }

  getRandomUser() {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer 398ry98yr398ey938ye983ue983u98'
    // });

    // // Petición con headers personalizadas
    // return this.http.get('https://randomuser.me/api/?results=1', { headers });

    // Petición normal
    return this.http.get('https://randomuser.me/api/?results=1');
  }
}
