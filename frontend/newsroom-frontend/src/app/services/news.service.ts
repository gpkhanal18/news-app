import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = `${environment.apiUrl}/news`;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getAllNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createNews(newsData: any): Observable<any> {
    return this.http.post(this.apiUrl, newsData, this.getAuthHeaders());
  }

  updateNews(id: number, newsData: any): Observable<any> {
    return this.http.put(
      `${this.apiUrl}/${id}`,
      newsData,
      this.getAuthHeaders()
    );
  }

  deleteNews(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  private getAuthHeaders() {
    const token = this.authService.getToken();
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }),
    };
  }
}
