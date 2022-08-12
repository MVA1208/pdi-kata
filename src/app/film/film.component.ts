import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  data: any = [[]];

  constructor(private filmService: FilmService) {}

  getData() {
    this.filmService.getInfo().subscribe((data) => {
      const list = data.split('\n').splice(1);
      list.forEach((e) => {
        this.data.push(e.split(','));
        console.log('film : ' + e);
      });
    });
    this.data.splice(0);
  }

  //tconst,titleType,primaryTitle,originalTitle,isAdult,startYear,endYear,runtimeMinutes,genres

  getTconst(film: string) {
    return film[0];
  }

  getTitleType(film: string) {
    return film[1];
  }

  getPrimaryTitle(film: string[]) {
    return film[2];
  }

  getOriginalTitle(film: string[]) {
    return film[3];
  }

  getIsAdult(film: string[]) {
    return film[4];
  }

  getStartYear(film: string[]) {
    return film[5];
  }

  getEndYear(film: string[]) {
    return film[6];
  }

  getRuntimeMinutes(film: string[]) {
    return film[7];
  }

  getGenres(film: string[]) {
    return film[8] + ',' + film[9];
  }

  ngOnInit(): void {
    this.getData();
  }
}
