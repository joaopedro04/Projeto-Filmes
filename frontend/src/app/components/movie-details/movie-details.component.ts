import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import DateFormatService from '../../services/date-format.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.data.backdrop_path = `http://image.tmdb.org/t/p/w500${this.data.backdrop_path}`;
    this.data.release_date = DateFormatService(this.data.release_date);
  }

}
