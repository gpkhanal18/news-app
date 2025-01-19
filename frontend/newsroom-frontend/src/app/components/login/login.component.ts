import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe((response) => {
        localStorage.setItem('token', response.token);
        alert('Login Successful!');
      });
  }
}
