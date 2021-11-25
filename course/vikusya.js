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
// const fruit = "Delicious peach";
//  console.log (fruit.toUpperCase());
//  console.log (fruit.indexOf('peach'));
//  console.log (fruit.slice(10, 15));
//  console.log (fruit.substring(10, 15));
//  console.log (fruit.substr(0, 5));
 
//  const num = 12.5;

//  console.log (Math.round(num));
 
//  const test = "12.2px";
//  console.log (parseInt(test));
//  console.log(parseFloat(test));

///////////////
//  function learnJS(lang, callback) {
//      console.log (`I learn ${lang}`);
//      callback();
//  }

//  function done() {
//      console.log (`I passed this lesson`);
//  }

//  learnJS ('JS', done);

 ///////////////
//  const options = {
//     name: "test",
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'blue'
//     },
//     makeTest: function () {
//         console.log ("test");
//     }
//  };

//  options.makeTest();

//  const {border, bg} = options.colors;
//  console.log (border);
 
//  console.log (Object.keys(options).length);

//  for (let key in options) {
//      if (typeof(options[key]) === 'object') {
//          for (let i in options[key]) {
//              console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
//          }
//      }else {
//          console.log (`Свойство ${key} имеет значение ${options[key]}`);
//      }
//  }

 ///Массивы

//  const arr = [23, 4, 16, 9, 10];
// arr.sort (compareNum);
// console.log (arr);

// function compareNum (a, b) {
//     return a - b;
// }

//  arr.pop();
// arr.push (12);
//  console.log (arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log (arr[i]);
// }

// for (let value of arr) {
//     console.log (value);
// }

// arr.forEach (function(item, i, arr) {
//     console.log (`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt ("", "");
// const products = str.split (", ");
// console.log (products);
// console.log (products.join ("; "));

// const obj = {
//     a: 5,
//     b: 8
// };

// // const copy = obj; //передача по ссылке
// // copy.a = 10;
// // console.log (copy);
// // console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 4,
//     b: 5,
//     c: {
//         d: 9,
//         e: 7
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 6;
// console.log (newNumbers);
// console.log (numbers);

// const add = {
//     x: 12,
//     y: 14
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign ({}, add);
// clone.x = 17;
// console.log (clone);
// console.log (add);

const arr = ['a', 'b', 'c'];
const newArr = arr.slice();
newArr[1] = 'h';
console.log (arr);
console.log (newArr);

const video = ['youtube', 'rutube'],
      blogs = ['instagram', 'twitter'],
      internet = [...video, ...blogs, 'vkontakte']; //spread

 console.log (internet);

function log(a, b, c) {
    console.log (a);
    console.log (b);
    console.log (c);
}

const num = [2, 5, 6];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newQ = {...q};

/////////Прототипы
const soldier = {
    health: 400,
    armour: 100,
    sayHello: function() {
        console.log("hello");
    }
};

const john = Object.create (soldier);
console.log (john.health);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; //старый способ

// console.log (john.armour);


Object.setPrototypeOf(john, soldier);

john.sayHello();