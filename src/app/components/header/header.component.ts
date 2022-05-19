import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  movieTile!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarPeliculas(event: Event) {
    event.preventDefault();
    this.router.navigate(['/movies'], {queryParams: {q: this.movieTile}});
  }

}
