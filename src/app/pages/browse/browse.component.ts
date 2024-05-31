import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { MovieCategoryComponent } from '../../components/movie-category/movie-category.component';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../types/movie';
import { tmdbConfig } from '../../constants/config';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,HeaderComponent,MovieCategoryComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.scss'
})
export class BrowseComponent {
  movieService = inject(MovieService);
  popularMovies:Movie[] = [];
  nowPlayingMovies:Movie[] = [];
  topRatedMovies:Movie[] = [];
  upComingMovies:Movie[] = [];
  bannerMovies!:Movie;
  tmdbConfig = tmdbConfig;
  public domSanitise = inject(DomSanitizer);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.movieService.getPopularMovies().subscribe((result:any)=>{
      console.log(result);
      this.popularMovies = result.results;
      this.bannerMovies = this.popularMovies[0];
      this.movieService.getMovieVideos(this.bannerMovies.id).subscribe((res:any)=>{

        this.bannerMovies.videoKey = res.results.find((x:any)=>x.site ='Youtube').key;
      });

    });
    this.movieService.getNowPlayingMovies().subscribe((result:any)=>{
      
      this.nowPlayingMovies = result.results;
    });
    this.movieService.getTopRatedMovies().subscribe((result:any)=>{
    
      this.topRatedMovies = result.results;
    });
    this.movieService.getUpcomingMovies().subscribe((result:any)=>{
   
      this.upComingMovies = result.results;
    });
  }
  
}
