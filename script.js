const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const lastFilmScore1 = +prompt("На сколько оцените его?", "");
const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const lastFilmScore2 = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = lastFilmScore1;
personalMovieDB.movies[lastFilm2] = lastFilmScore2;

console.log(personalMovieDB.movies);
