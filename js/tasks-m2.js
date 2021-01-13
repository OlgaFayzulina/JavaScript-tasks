// Task 1
// function checkAge(age) {
//     if (age >= 18) { // Дополни эту строку
//       return 'Вы совершеннолетний человек';
//     }
  
//     return 'Вы не совершеннолетний человек';
//   }

// Task 2
// function checkPassword(password) {
//     const ADMIN_PASSWORD = 'jqueryismyjam';
//     // Пиши код ниже этой строки
  
//     if (password === 'jqueryismyjam') {
//       return 'Добро пожаловать!';
//     } 
    
//       return 'Доступ запрещен, неверный пароль!';
//     // Пиши код выше этой строки
//   }

// Task 3
// function checkStorage(available, ordered) {
//     // Пиши код ниже этой строки
//     if (ordered === 0) {
//       return 'В заказе еще нет товаров';
//     } 
//     if (ordered > available) {
//       return 'Слишком большой заказ, на складе недостаточно товаров!';
//     } 
//       return 'Заказ оформлен, с вами свяжется менеджер';
  
//     // Пиши код выше этой строки
//   }

// Task 4
// // Пиши код ниже этой строки
// const fruits = ['яблоко','слива','груша','апельсин']

// Task 5
// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// Task 6
// // Стартовый код
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// // Пиши код ниже этой строки
// fruits[1] = 'персик';
// fruits[3] = 'банан';

// Task 7
// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой строки
// const fruitsArrayLength = fruits.length;

// Taks 8
// // Стартовый код
// const fruits = ['яблоко', 'персик', 'груша', 'банан'];
// // Пиши код ниже этой 

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// Task 9
// function getExtremeElements(array) {
//     // Пиши код ниже этой строки
//   return [array[0], array[array.length-1]];



//     // Пиши код выше этой строки
//   }

// Task 10
// function splitMessage(message, delimeter) {
//     let words;
//     // Пиши код ниже этой строки
//     words = message.split(delimeter);
    
    
//     // Пиши код выше этой строки
//     return words;
//   }


// Task 11
// function calculateEngravingPrice(message, pricePerWord) {
//     // Пиши код ниже этой строки
//     let totalPrice;
//     totalPrice = message.split(' ').length * pricePerWord;
   
//     return totalPrice;
  
//     // Пиши код выше этой строки
//   }

// Task 12
// function makeStringFromArray(array, delimeter) {
//     let string;
//     // Пиши код ниже этой строки
   
//    string = array.join(delimeter);
   
//     // Пиши код выше этой строки
//     return string;
//   }

// Task 13
// function slugify(title) {
//     // Пиши код ниже этой строки
   
//     let slug;
//     slug = title.toLowerCase().split(' ').join('-');
   
//     return slug;
   
//     // Пиши код выше этой строки
//   }

// Task 14
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls = fruits.slice(1,4);
// const lastThreeEls = fruits.slice(-3);

// Task 15
// const oldClients = ['Манго', 'Аякс', 'Поли', 'Киви'];
// const newClients = ['Персик', 'Хьюстон'];

// const allClients = oldClients.concat(newClients); // Дополни эту строку

// Task 16
// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// const allArrays = firstArray.concat(secondArray);
  
//   if (allArrays.length > maxLength) {
//   return allArrays.slice(0,maxLength);
//   }
  
//   return allArrays;
    
//     // Пиши код выше этой строки
//   }

// // Task 17
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Дополни эту строку
//   console.log(i);
// }

// Task 18
// function calculateTotal(number) {
//     // Пиши код ниже этой строки
    
//     let sum = 0;
//     for (let i = 0; i <= number; i += 1) {
//      sum += i;
//   }
  
//    return sum;
  
  
//     // Пиши код выше этой строки
//   }

// Task 19
// const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

// for (let i = 0; i<fruits.length; i += 1) { // Дополни эту строку
//   const fruit = fruits[i]; // Дополни эту строку
//   console.log(fruit);
// }

// Task 20
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Пиши код ниже этой строки
//       for (let i = 0; i < order.length; i += 1) {
//       total += order[i];
//       }
//     // Пиши код выше этой строки
//     return total;
//   }

// Task 21
// function findLongestWord(string) {
//     // Пиши код ниже этой строки
    
//     let arrayString = string.split(' ');
//     let longestWord = '';
    
//     for (let i = 0; i < arrayString.length; i += 1) {
//       if (arrayString[i].length > longestWord.length) {
//         longestWord = arrayString[i];
//       }
//     }
     
//       return longestWord;
   
//     // Пиши код выше этой строки
//   }

// Task 22
// function createArrayOfNumbers(min, max) {
// const numbers = [];
// //     Пиши код ниже этой строки
// for (let i = min; i <= max; i +=1) {
// numbers.push(i);
// }
    
//     // Пиши код выше этой строки
//     return numbers;
//   }

// Task 23
// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
  
//     const newArray = [];
//     for (let i = 0; i < numbers.length; i += 1) 
//     {
//       if (numbers[i] > value) {
//         newArray.push(numbers[i]);
//       } 
//     }
  
//     return newArray;
  
//     // Пиши код выше этой строки
//   }

// Task 24
// function checkFruit(fruit) {
//     const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
  
//     return fruits.includes(fruit); // Дополни эту строку
//   }

// Task 25
// function getCommonElements(array1, array2) {
//     // Пиши код ниже этой строки
//   const CommonElements = [];
//     for (const number of array1) {
//      if(array2.includes(number)) {
  
//        CommonElements.push(number);
//     }
//   }
//     return CommonElements;
//     // Пиши код выше этой строки
//   }

// Task 26
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Пиши код ниже этой строки
  
//     for (const eachOrder of order) {
//       total += eachOrder;
//     }
  
//     // Пиши код выше этой строки
//     return total;
//   }

// Task 27
// function filterArray(numbers, value) {
//     // Пиши код ниже этой строки
//     const filteredNumbers = [];
  
//     for (const number of numbers) {
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     return filteredNumbers;
//     // Пиши код выше этой строки
//   }

// Task 28
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// Task 29
// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//     const evenNumbers = [];
//     for (let i = start; i <= end; i +=1) {  
//       if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
// }
//     return evenNumbers;
//     // Пиши код выше этой строки
//   }

// Task 30
// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// Task 31
// function findNumber(start, end, divisor) {
//     // Пиши код ниже этой строки
    
  
//     for (let i = start; i < end; i += 1) {
//       if (i % divisor === 0) {
//         return i;
//       }
//     }
    
//     // Пиши код выше этой строки
//   }

// Task 32
// function includes(array, value) {
//     // Пиши код ниже этой строки
  
//     for (let i = 0; i < array.length; i += 1) {
//       if (array[i] === value) {
//         return true;
//       }
//     }
    
//        return false;
//     // Пиши код выше этой строки
//   }
