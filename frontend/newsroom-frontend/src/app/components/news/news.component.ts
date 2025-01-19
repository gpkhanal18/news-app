import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  newsArticles: any[] = [];
  isAuthenticated: boolean = false;
  isAdmin: boolean = false;
  newArticle = { title: '', content: '', author: '', imageUrl: '' }; // ✅ Added author and imageUrl
  editArticle = { id: null, title: '', content: '', author: '', imageUrl: '' }; // ✅ Added author and imageUrl
  showEditForm = false;

  constructor(
    private newsService: NewsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.getUsername() === 'admin'; // Only 'admin' can edit news

    this.fetchNews();
  }

  fetchNews(): void {
    this.newsService.getAllNews().subscribe(
      (data: any) => {
        this.newsArticles = data;
      },
      (error) => console.error('❌ Error fetching news:', error)
    );
  }

  addNews(): void {
    if (
      !this.newArticle.title ||
      !this.newArticle.content ||
      !this.newArticle.author ||
      !this.newArticle.imageUrl
    ) {
      alert('❌ All fields (Title, Content, Author, Image URL) are required!');
      return;
    }

    this.newsService.createNews(this.newArticle).subscribe(
      () => {
        alert('✅ News article added successfully!');
        this.fetchNews();
        this.newArticle = { title: '', content: '', author: '', imageUrl: '' }; // Reset form
      },
      (error) => console.error('❌ Error adding news:', error)
    );
  }

  editNews(article: any): void {
    this.showEditForm = true;
    this.editArticle = {
      id: article.id,
      title: article.title,
      content: article.content,
      author: article.author,
      imageUrl: article.imageUrl,
    };
  }

  updateNews(): void {
    if (
      !this.editArticle.title ||
      !this.editArticle.content ||
      !this.editArticle.author ||
      !this.editArticle.imageUrl
    ) {
      alert('❌ All fields (Title, Content, Author, Image URL) are required!');
      return;
    }

    this.newsService
      .updateNews(this.editArticle.id!, this.editArticle)
      .subscribe(
        () => {
          alert('✅ News article updated successfully!');
          this.fetchNews();
          this.showEditForm = false;
        },
        (error) => console.error('❌ Error updating news:', error)
      );
  }

  deleteNews(id: number): void {
    if (confirm('Are you sure you want to delete this news article?')) {
      this.newsService.deleteNews(id).subscribe(
        () => {
          alert('✅ News article deleted successfully!');
          this.fetchNews();
        },
        (error) => console.error('❌ Error deleting news:', error)
      );
    }
  }
}
