"use strict";

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN (personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function(){for (let i=0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?","");
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('ok');
        } else {
            i--;
            console.log('no');
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert ('Просмотрено довольно мало фильмов');
        } else if ( personalMovieDB.count >= 30) {
            alert ('Вы киноман');
        } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert ('Вы классический зритель');
        } else {
            alert ('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log (personalMovieDB);
        }
    },
    // writeYourGenres: function () {
    //     for (let i=1; i <= 3; i++) {
    //         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    //         if (genre == "" || genre == null) {
    //             i--;
    //         }else {
    //             personalMovieDB.genres [i - 1] = genre; 
    //         }
    //     }

    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log (`Любимый жанр ${i + 1} - это ${item}`);
    //     });
    // },
    writeYourGenres: function () {
        for (let i=1; i < 2; i++) {
            let genres = prompt(`Ваши любимые жанры через запятую`).toLowerCase();
            if (genres == "" || genres == null) {
                i--;
            }else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort(); 
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log (`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else { 
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.writeYourGenres();

// const a = prompt("Один из последних просмотренных фильмов?", ""),
//       b = prompt("На сколько оцените его?",""),
//       c = prompt("Один из последних просмотренных фильмов?", ""),
//       d = prompt("На сколько оцените его?","");


// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// function rememberMyFilms(){for (let i=0; i < 2; i++) {
//         const a = prompt("Один из последних просмотренных фильмов?", ""),
//               b = prompt("На сколько оцените его?","");
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('ok');
//         } else {
//             i--;
//             console.log('no');
//             }
//         }
// }
// rememberMyFilms();

// 2 СПОСОБ

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один и последних просмотренных фильмов', ''),
//           b = prompt('На сколько оцените его', '');
//     i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//     } else {
//      console.log('error');
//      i--;
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert ('Просмотрено довольно мало фильмов');
//     } else if ( personalMovieDB.count >= 30) {
//         alert ('Вы киноман');
//     } else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert ('Вы классический зритель');
//     } else {
//         alert ('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log (personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres () {
//     for (let i=1; i <= 3; i++) {
//         personalMovieDB.genres [i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();