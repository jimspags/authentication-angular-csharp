import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api-service/api.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ApiService]
})

export class AppComponent implements OnInit{
  title = 'UI';
  message: string = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage() {
    this.apiService.getMessage()
    .pipe(
      catchError(error => {
        if (error instanceof ErrorEvent)
        {
          // This is a client-side or network error.
          console.error(error);
        } else {
          // This is a server-side error.
          console.error(error);
        }
        return error;
      })
    )
    .subscribe((result: any) => {
      this.message = result.message;
    });
  }
}
