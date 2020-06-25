import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { User } from '../models/usersInterface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  User: any;

  constructor(private http: HttpClient) {
    this.User = environment.URL;
    console.log('Runing');
  }

  /**
   * Get Users
   */
  public getUsers(): Observable<any> {
    return this.http
      .get<User>(`${this.User}`)
      .pipe(catchError(this._handleError)); //maneja el error en la respuesta
  }

  /**
   * Create Delete by Id
   */

  public deleteUserById(id: string) {
    return this.http.delete(`${this.User}/${id}`);
  }

  public createUsers(user: User) {
    return this.http
      .post<User>(`${this.User}`, user)
      .pipe(catchError(this._handleError)); //maneja el error en la respuesta
  }

  public editPostById(user: User) {
    return this.http.put(`${this.User}/${user.id}`, user);
  }

  /**
   * Handles any request error
   */
  private _handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
