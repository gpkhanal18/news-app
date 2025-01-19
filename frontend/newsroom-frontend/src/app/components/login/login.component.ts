import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = ''; // ✅ Ensure default values
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (!this.username || !this.password) {
      console.error('❌ Username or password is missing!');
      return;
    }

    console.log('✅ Sending Login Request:', {
      username: this.username,
      password: this.password,
    });

    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        console.log('✅ Login successful:', response);
        this.router.navigate(['/news']);
      },
      (error) => console.error('❌ Login error:', error)
    );
  }
}
