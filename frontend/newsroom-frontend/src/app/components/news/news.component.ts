import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsArticles: any[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    console.log('Fetching news articles...');
    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getAllNews().subscribe((data: any) => {
      this.newsArticles = data;
    });
  }
}
