import { Component } from '@angular/core';
import { RegisterModel } from '../../models/register-model';
import { AuthService } from '../../services/auth-service/auth.service';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  register: RegisterModel = new RegisterModel();

  constructor(private authService: AuthService) {
    
  }

  onRegister() {
    this.authService.onRegister(this.register)
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
      alert("Successfully registered!");
      this.register = new RegisterModel();
    })
  }
}
