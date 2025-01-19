import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiUrl = `${environment.apiUrl}/news`;

  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createNews(newsData: any): Observable<any> {
    return this.http.post(this.apiUrl, newsData);
  }

  updateNews(id: number, newsData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, newsData);
  }

  deleteNews(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
