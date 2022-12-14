import { Component } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movie/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  title = '';
  constructor(private service: MovieService, private router: Router) {}

  searchMovies() {
    this.router.navigate(['']);
    if (this.title.trim().length > 0) {
      this.router.navigate(['']);
      this.service.searchMovie(this.title).subscribe();
    }
  }
}
