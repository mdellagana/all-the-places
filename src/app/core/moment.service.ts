import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Moment } from './moment.interface';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getMoments(): Observable<any> {
    console.log('aaaaa');
    return this.http.get(`${this.baseUrl}/moments/allMoments`);
  }

  addMoment(moment: Moment): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http
      .post<Moment>(`${this.baseUrl}/moments/addMoment`, moment, httpOptions)
      .toPromise()
      .then(() => console.log(moment))
      .catch(error => this.handleError(error));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    }
    return throwError(error);
  }
}
