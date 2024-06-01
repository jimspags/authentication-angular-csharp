import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginModel } from '../../models/login-model';
import { AuthService } from '../../services/auth-service/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login: LoginModel = new LoginModel();

  constructor(private authService: AuthService) {
    
  }

  onLogin() {
    this.authService.onLogin(this.login)
    .pipe(
      catchError(error => {
        if (error instanceof ErrorEvent) {
          console.error("Client");
          console.error(error);
        } else {
          console.error("Server");
          console.error(error);
        }

        return error;
      })
    )
    .subscribe((result: any) => {
      alert("You're logged in!");
      console.log(result);
    })
  }
}
