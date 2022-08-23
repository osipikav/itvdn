"use strict";

let numberOfFilms;

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
      if (lastFilm != null && lastFilm != "" && lastFilm.length < 50) {
        const lastFilmScore = prompt("На сколько оцените его?", "");
        if (lastFilmScore != null && lastFilmScore != "") {
          personalMovieDB.movies[lastFilm] = lastFilmScore;
        }
      } else {
        console.log("проверьте содержимое строки");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else console.log("Произошла ошибка");
  },
  writeYourGenres: function () {
    for (let i = 1; i < 4; i++) {
      const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (genre == null || genre == "") {
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }
    personalMovieDB.genres.forEach((el, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${el}`);
      // i++;
    });
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};
