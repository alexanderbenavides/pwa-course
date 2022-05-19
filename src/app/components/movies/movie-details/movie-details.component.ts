import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { moviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie!: any;
  constructor(
    private moviesService: moviesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.moviesService.buscarPeliculaPorId(params.movieId).subscribe(response => {
        this.movie = response;
      })
    })
  }

}
