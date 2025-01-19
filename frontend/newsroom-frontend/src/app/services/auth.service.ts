import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authToken = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        map((response: any) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            this.authToken.next(response.token);
          }
          return response;
        })
      );
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.authToken.next(null);
  }
}
