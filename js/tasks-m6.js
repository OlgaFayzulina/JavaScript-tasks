// Task 1

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;
//     // Пиши код ниже этой строки
  
//     orderedItems.forEach(item => {
//           totalPrice += item;               
//       });
  
//     // Пиши код выше этой строки
//     return totalPrice;
//   }

// Task 2
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
  
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number)
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }

// Task 3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     firstArray.forEach(item => {
//     if (secondArray.includes(item)) {
//         commonElements.push(item)
//       }
//     });
  
//     return commonElements;
//     // Пиши код выше этой строки
//   }

// Task 4
// // Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {  return quantity * pricePerItem;

//     // Пиши код выше этой строки
    
//   }

// Task 5
// // Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => 
//   quantity * pricePerItem;
// // Пиши код выше этой строки

// Task 6
// // Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//     let totalPrice = 0;
  
//     orderedItems.forEach(item => {
//       totalPrice += item;
//     });
  
//     return totalPrice;
//   }
//   // Пиши код выше этой строки

// Task 7
// // Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }


//  Task 8
//  // Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
    // Пиши код выше этой строки
//     return commonElements;
// }

// Task 9

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
   
//     const newArray = [];
  
//    numbers.forEach(number => {
//   if (number % 2 === 0) {
//     number = number + value;
//     }
//     else {
//       number = number;
//     }
//     newArray.push(number);
//   });
  
//     return newArray;
//     // Пиши код выше этой строки
//   }

// Task 10

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map((planet) => planet.length);

// Task 11
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);

// Task 12
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика']
//   }
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap((book) => book.genres);

// Task 13
// // Пиши код ниже этой строки
// const getUserNames = users => {
//   const userNames = users.map(user => user.name);
//   return userNames;
// };

// // Пиши код выше этой строки

// Task 14
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//   const userEmails = users.map(user => user.email);
//   return userEmails;

//   };
//   // Пиши код выше этой строки

// Task 15
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number=> number % 2===0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Task 16
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое']
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика']
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения']
//   }
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genres,index,array) => array.indexOf(genres) === index);


// Task 17
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);

// Task 18
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   const usersWithEyeColor = users.filter((user) => user.eyeColor === color);
//    return usersWithEyeColor;
 
//  };
//  // Пиши код выше этой строки

// Task 19

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон


// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//   const usersWithAge = users.filter((user) => user.age >= minAge && user.age < maxAge);
//    return usersWithAge;
 
//  };
//  // Пиши код выше этой строки

// Task 20

// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   const usersWithFriend = users.filter((user) => user.friends.includes(friendName));
//   return usersWithFriend;
// };
// // Пиши код выше этой строки

// Task 21
// // Пиши код ниже этой строки
// const getFriends = (users) => {
//   const allUsers = users.flatMap(user => user.friends);
//   const uniqueFriends = allUsers.filter((users,index,array) => array.indexOf(users) === index); 
//  return uniqueFriends;
// };
// // Пиши код выше этой строки

// Task 22
// // Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//   const activeUsers = users.filter(user => user.isActive);
//   return activeUsers;
// };
// // Пиши код выше этой строки

// Task 23
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   const inactiveUsers = users.filter(user => !user.isActive);
//   return inactiveUsers; 
// };
// // Пиши код выше этой строки

// Task 24

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// Task 25

// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   const userWithEmail = users.find((user) => user.email === email);
//   return userWithEmail;
// };
// // Пиши код выше этой строки

// Task 26

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((element) => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((element) => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((element) => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((element) => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((element) => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((element) => element % 2 !== 0);

// Task 27

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   const everyUserActive = users.every((user) => user = user.isActive);
  
//   return everyUserActive;
// };
// // Пиши код выше этой строки

// Task 28

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some(element => element % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(element => element % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(element => element % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(element => element % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(element => element % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(element => element % 2 !== 0);

// Task 29

// // Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   const anyUserActive = users.some(user => user = user.isActive);
//   return anyUserActive;
// };
// // Пиши код выше этой строки

// Task 30

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue,time) => {
//    return previousValue + time;
// },0);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

// Task 31
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total,player) => {
// return total + player.playtime / player.gamesPlayed
// },0);

// Task 32

// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//   const totalBalance = users.reduce((total,user) => total +user.balance,0);
//  return totalBalance;
// };
// // Пиши код выше этой строки

// Task 33
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   const totalFriend = users.reduce((totalFriends,user) => totalFriends + user.friends.length, 0);
//   return totalFriend;
// };
// // Пиши код выше этой строки

// Task 34

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// Task 35

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);

// const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);

// Task 36

// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский',
//   'Говард Лавкрафт'
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));

// Task 37

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook,secondBook) => firstBook.author.localeCompare(secondBook.author));

// const sortedByReversedAuthorName = [...books].sort((firstBook,secondBook) => secondBook.author.localeCompare(firstBook.author));

// const sortedByAscendingRating = [...books].sort((firstBook,secondBook) => firstBook.rating - secondBook.rating);

// const sortedByDescentingRating = [...books].sort((firstBook,secondBook) => secondBook.rating - firstBook.rating);


// Task 38

// // Пиши код ниже этой строки
// const sortByAscendingBalance = users => {
  
//    const sortedByAscendingBalance = 
//   (firstUser,secondUser) => firstUser.balance - secondUser.balance;
  
//   return [...users].sort(sortedByAscendingBalance);
// };
// // Пиши код выше этой строки

// Task 39

// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
  
//   const sortedByDescendingFriendCount = (firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length; 
  
//   return [...users].sort(sortedByDescendingFriendCount);
// };
// // Пиши код выше этой строки

// Task 40

// // Пиши код ниже этой строки
// const sortByName = users => {
  
//   const sortedByName = (firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name);
  
//   return [...users].sort(sortedByName)
   
// };
// Пиши код выше этой строки

// Task 41

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
// .filter((book) => book.rating >= MIN_BOOK_RATING)
// .map((book) => book.author)
// .sort((firstBook,secondBook) => firstBook.localeCompare(secondBook));

// console.log(names);

// Task 42

// Дополни функцию getNamesSortedByFriendCount(users) так, 
// чтобы она возвращала массив имён пользователей отсортированный 
// по возрастанию количества их друзей (свойство friends).

// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//   const names = [...users]
//   .sort((firstUser,secondUser) => firstUser.friends.length - secondUser.friends.length)
//   .map((user) => user.name);
//   return names;
// }; 

// // Пиши код выше этой строки

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
  // .map((student) => student.name);

//   Task 43

//   Дополни функцию getSortedFriends(users) так, чтобы она возвращала 
//   массив уникальных имён друзей 
//   (свойство friends) отсортированный по алфавиту .

//   const getSortedFriends = users => {
   
//     const uniqueSortedFriends = users
//      .flatMap((user) => user.friends)
//      .filter((friend, index, array) => array.indexOf(friend) === index)
//      .sort((a,b) => a.localeCompare(b));

//      return uniqueSortedFriends;
//   };


//   Получим сортированный по алфавиту массив уникальных посещаемых предметов.

//   const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses);

// На исходном массиве вызываем flatMap() и делаем разглаженный массив всех курсов.
// К результату метода flatMap() применяем метод filter() для фильтрации уникальных элементов.
// На результате метода filter() вызываем sort().
// Переменной uniqueSortedCourses присваивается результат работы метода sort().

// Task 44

// Дополни функцию getTotalBalanceByGender(users, gender) так, 
// чтобы она возвращала общий баланс пользователей (свойство balance), 
// пол которых (свойство gender) совпадает со значением параметра gender.

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) => {
  
//   const totalBalance = users
  
//   .filter(user => user.gender === gender)
//   .reduce((total,user) => total + user.balance, 0); 
 
//  return totalBalance;
// };
// // Пиши код выше этой строки

