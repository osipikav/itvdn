let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");
let lastFilm = prompt("Один из последних просмотренных фильмов?");
let lastFilmScore = prompt("На сколько оцените его?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {
    lastFilm: lastFilmScore,
  },
  actors: {},
  genres: [],
  privat: false,
};
console.log(personalMovieDB);
