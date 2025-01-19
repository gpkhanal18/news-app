import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { LoginComponent } from './components/login/login.component';

// Services
import { NewsService } from './services/news.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, NewsComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Enables API calls
    FormsModule, // Enables form handling
  ],
  providers: [NewsService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
