import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getdata(): Observable<any> {
    return this
      .http
      .get(`https://mongo-login-app.herokuapp.com/data`)
      .pipe(
        map(res => res)
      )
  }
}
