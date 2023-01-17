// Homework 4 

// Перепишите функцию, используя оператор '?' или '||'
// оператор '?'

const userAge = prompt('how old are you?');
let message = (userAge > 18) ? true : confirm('Do your parents gave you permission?');

// оператор '||'

function allowed (userAge) {
    if (userAge > 18) {
      return true;
  }
}
function isNotAllowed (userAge) {
    if (userAge < 18) {
        return confirm('Do your parents gave you permission?');
    }
}
console.log(allowed(userAge) || isNotAllowed(userAge));


// Функция pow(x,n)
function pow(x, n) {
    return Math.pow(x, n)
}
console.log(pow(2,4)); 


// Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );


// Сортировать в порядке по убыванию
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
alert( arr ); 


// Трансформировать в массив имён
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name)
// alert( names ); 


// Трансформировать в объекты
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map (user => ({fullName: `${user.name} ${user.surname}`, id: user.id}));

// alert( usersMapped[0].id ) 
// alert( usersMapped[0].fullName ) 


// Получить средний возраст
function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr1 = [ vasya, petya, masha ];
alert( getAverageAge(arr1) ); 

