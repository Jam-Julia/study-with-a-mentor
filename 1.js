// let arg = (NaN ** 0); //NaN ** 0 = 1;
// console.log(arg);
// //сравнение чисел. равенство при преобразовании
// let a = 0;
// console.log(Boolean(a)); // false так как 0 это фолс

// let b = "0";
// console.log(Boolean(b)); // true так как любое значение строки непустое это тру

// console.log(a == b); // true! операнды разных типов преобразуются 
// //обычным оператором == к числу т.е. 
// //js делает строку "0" числом и опять  же все сходится


// console.log( 0 == false );// true
// alert( '' == false );// true
// console.log( 0 === false ); // false, так как сравниваются разные типы

// //При строгом равенстве ===
// console.log( null === undefined );// false,

// //При нестрогом равенстве ==
// console.log( null == undefined );// true
// //Эти значения равны друг другу и не равны никаким другим значениям. Это специальное правило языка.


//задачка по условным операторам в кодпене
// let nemOfJS = prompt('Какое «официальное» название JavaScript?', '');
// if (nemOfJS="ECMAScript"){
//   alert("Верно!");
//   }
//   else {
//     alert("Не знаете? ECMAScript!");
//   }
/*Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,
-1, если значение меньше нуля,
0, если значение равно нулю.*/
//let value = prompt('Введите число', '');
// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

//Перепишите конструкцию if с использованием условного оператора '?':
//result = (a + b < 4) ? 'Мало' : 'Много';

//Перепишите 'if..else' в '?' (было тяжко - бедные мои глаза)

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';

// а вот это было откровением 
//   Что выведет код ниже?

// alert( alert(1) || 2 || alert(3) );
// решение
// Ответ: сначала 1, затем 2.

// alert( alert(1) || 2 || alert(3) );
// Вызов alert не возвращает значения, или, иначе говоря, возвращает undefined.

// Первый оператор ИЛИ || выполнит первый alert(1).
// Получит undefined и пойдёт дальше, ко второму операнду в поисках истинного значения.
// Так как второй операнд 2 является истинным, то вычисления завершатся, результатом undefined || 2 будет 2, которое будет выведено внешним alert( .... ).
// Второй оператор || не будет выполнен, выполнение до alert(3) не дойдёт, поэтому 3 выведено не будет.


//Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.

// let age = 17;
// if (age >= 14 && age <= 90) {
//   console.log("все верно")
// }
//что НЕ находится
// let age = 5;
//  if (!(age >= 14 && age <= 90)) {
//    console.log("все верно")
//   }

// Задачка из кодпен

// Напишите код, который будет спрашивать логин с помощью prompt.

// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:

// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».


// let login = prompt("введите логин");
// if (login === "Админ") {
//   let pass = prompt('Пароль?', '');
//   if (pass === 'Я главный') {
//     alert('Здравствуйте!');
//   } else if (pass === '' || pass === null) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// }

// else if (login === '' || login === null) {
//   alert("отменено")
// }
// else { alert("таких не знаем") }