import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null; // ✅ Holds login error message

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.errorMessage = null; // Reset error message before attempting login

    if (!this.username || !this.password) {
      this.errorMessage = '❌ Username and password are required!';
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('✅ Login successful:', response);
        this.router.navigate(['/news']);
      },
      (error) => {
        console.error('❌ Login error:', error);
        this.errorMessage =
          '❌ Invalid username or password! Please try again.';
      }
    );
  }
}
