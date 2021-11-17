"use strict";

// if(num < 19) {
//     console.log("Неверно");
// } else if(num>50) {
//     console.log("No bro");
// }else {
//     console.log("Yes");
// }

// (num > 10) ? console.log("Yes") : console.log("Nooo"); тернарный оператор

// const num = 20;

// switch (num) {
//     case 25:
//         console.log("Noo");
//         break;
//     case 70:
//         console.log("Eh");
//         break;
//     case 20:
//         console.log("Yeah");
//         break;
//     default:
//         console.log("Olmadi");
//         break;        
// }

// let numb = 30;

// while (numb < 36) {
//     console.log(numb);
//     numb++;
// }

// do {
//     console.log(numb);
//     numb++;
// }
// while (numb <= 36);

// for (let i=1; i<8; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);
// }

// Функции

// function showFirstMessage () {
//     console.log ("hello");
// }

// showFirstMessage ();

// let num = 20;

// function showFirstMessage (text) {
//     console.log (text);
//     num = 20;
// }

// showFirstMessage ('hello');
// console.log (num);

// function calc (a, b) {
//     return (a + b);
// }

// console.log (calc(2, 4));
// console.log (calc(8, 7));

// function ret() {
//     let num = 30;

//     return (num);
// }

// const anotherNum = ret ();
// console.log (anotherNum);

// let logger = function () {
//     console.log ('dura');
// };

// logger ();

// const calc = (a, b) => a + b;

///////////////
const fruit = "Delicious peach";
 console.log (fruit.toUpperCase());
 console.log (fruit.indexOf('peach'));
 console.log (fruit.slice(10, 15));
 console.log (fruit.substring(10, 15));
 console.log (fruit.substr(0, 5));
 
 const num = 12.5;

 console.log (Math.round(num));
 
 const test = "12.2px";
 console.log (parseInt(test));
 console.log(parseFloat(test));

///////////////
 function learnJS(lang, callback) {
     console.log (`I learn ${lang}`);
     callback();
 }

 function done() {
     console.log (`I passed this lesson`);
 }

 learnJS ('JS', done);

 ///////////////
 const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'blue'
    },
    makeTest: function () {
        console.log ("test");
    }
 };

 options.makeTest();

 const {border, bg} = options.colors;
 console.log (border);
 
 console.log (Object.keys(options).length);

 for (let key in options) {
     if (typeof(options[key]) === 'object') {
         for (let i in options[key]) {
             console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
         }
     }else {
         console.log (`Свойство ${key} имеет значение ${options[key]}`);
     }
 }