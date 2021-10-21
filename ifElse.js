/*
const weather = -1;

if  (0 <= weather && weather < 10){
    console.log('надень куртку')
} else if (10 < weather && weather< 20){
    console.log(' не нужно куртки')
} else if (20 < weather && weather< 30){
    console.log('не выходи на улицу')
} else if ( -10 > weather && weather < 0){
    console.log('себе башку отморозишь')
}



const user1 = 'Aibek';
const user2 = 'Muzzi';
const user3 = 'shef';

const  age1 = 18;
const  age2 = 17;
const  age3 = 21;

const isAdmin1 = true
const isAdmin2 = false
const isAdmin3 = false


if ( isAdmin1 || age1 >= 18 ){
    console.log(user1)
} 
 if ( isAdmin2 || age2 >= 18 ){
    console.log(user2)
} 
 if ( isAdmin3 || age3 >= 18){
    console.log(user3)
} 
 if ( isAdmin1){
    
}


*/

// const a = 15;
// const b = true;
// const c = '12';

// a === 15 ? console.log('da') : console.log('net')
// b === false ? console.log('da') : console.log('net')
// c === 12 ? console.log('da') : console.log('net')


const a = 10;
const b = 20;
const c = 30;
const d = 100;

if (d < c || d < b){
    console.log("Приземляемся!")
}
if (d > b || d > a || d > c){
    console.log("Возвышаемся!")
}
if (d > c || d > b){
    console.log("Фаталити!")
}

const salary = 2000; // зарплата
let balance = 500; // наш кошелек
let date = 1; // число месяца

if ( date === 1 ){
    var summ = salary + balance;
    console.log(summ)
}
 date += 18;
if (date > 15){
    console.log( summ - 200)
}

const salary = 2000; // зарплата
let balance = 500; // наш кошелек
let date = 17; // число месяца
let month = 1; // месяц

date += 20;

if (date > 30 ){
    month += 1
}
if (date > 1){
    sum = balance + salary;
}
if (date > 14  || date < 16){
     sum - 200
}
if (date > 15){
     sum - 20
}
 
date += 25

if (date > 30){
    month +=1;
    date -= 30
}

console.log('Месяц:' + month + '\nЧисло: '+ date + ' \nБаланс: ' +sum)
