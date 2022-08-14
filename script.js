let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}
start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
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
}
rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count > 30) {
    console.log("Вы киноман");
  } else console.log("Произошла ошибка");
}
detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`, "");
    personalMovieDB.genres.push(genre);
  }
}
writeYourGenres();

console.log(personalMovieDB.privat == "false");
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);
