import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken = new BehaviorSubject<string | null>(null);
  private currentUser = new BehaviorSubject<string | null>(null);
  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient) {
    // Load saved user info from local storage
    const token = localStorage.getItem('authToken');
    const username = localStorage.getItem('username');
    if (token) {
      this.authToken.next(token);
      this.currentUser.next(username);
    }
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        map((response: any) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            localStorage.setItem('username', username);
            this.authToken.next(response.token);
            this.currentUser.next(username);
          }
          return response;
        }),
        catchError((error) => {
          console.error('❌ Login failed:', error);
          return throwError(() => new Error('Invalid credentials'));
        })
      );
  }

  /** ✅ Added missing getToken() method */
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  /** ✅ Added missing getUsername() method */
  getUsername(): string | null {
    return localStorage.getItem('username');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('username');
    this.authToken.next(null);
    this.currentUser.next(null);
  }
}
