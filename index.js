
// let numbers = [32,53,23,3,64,12,87,45,33,49,10,11,53];
// let min = 0
// let max = 0
// let sum = 0
// let arg = 0

// for (let i = 0; i < numbers.length; i++) {
//     if ( i === 0){
//       max = numbers[i];
//       min = numbers[i]
//     }
//     if (numbers[i] > max){
//         max = numbers[i]
//     }
//     if (numbers[i] < min){
//         min = numbers[i]
//     }
//     sum += numbers[i];
//     arg = sum / numbers.length;

//     if (numbers[i] % 2 == 0){
//         console.log('ping')
//     }else {
//         console.log('pong')
//     }
// } 
// console.log(max)
// console.log(min)
// console.log(sum)
// console.log(arg)


// let a = 0;

// while(a < 3){
//     console.log('numders ', a)
//     a++;
// }


// let user = [
//     {
//         name: 'John',
//         age: 14,
//         isAdmin: false,
//     },
//     {
//         name: 'Samat',
//         age: 21,
//         isAdmin: false,
//     },
//     {
//         name: 'Aibek',
//         age: 10,
//         isAdmin:true, 
//     },
// ]

// for (let i = 0; i < user.length; i++) {
//     if (user[i].age >= 18 || user[i].isAdmin){
//         console.log(user[i].name)
//     }
// }

// let arr = [1, 24, 55564, 6547, 46, 2, 55, 765, 76, 789, 89, 9456]

// for (let i = 0; i < arr.length; i++) {
//     if( i % 2 == 0){
//         console.log('ping');
//     }else{
//         console.log('pong')
//     }
// }


// let a = [];
// for (let i = 0; i <= 50; i++) {
//       if (i === 0 || i === 1){
//           a.push(1)
//       }else{
//           a.push(a[i-1] + a[i-2])
//       }
// }
// console.log(a);

// console.log(a)

// function showMessadge(){
//     console.log(`ПРИВЕТ, ${name}`);
// };
// (`hi, ${Jhon}`) 

// function math(a, b) {
//     return a + b;
// }

// console.log(math(5, 4));
// console.log(math(4, 4));
// console.log(math(5, 8));
// console.log(math(51, 4));
// console.log(math(5, 4));

// function Car(name, speed, mator) {
//     this.name = name;
//     this.speed = speed;
//     this.mator = mator;
// }

// let bmw = new Car ('BMW', 330, 'V'+8);
// console.log(bmw);

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.push(10)
// console.log(arr);

// arr.shift();
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.splice(7);
// console.log(arr);

// arr.slice(5);
// console.log(arr);


// function showMessadge(params) {
//   return `My message: ${params}`
// }

// function setMasege(callback, params) {
//     return callback(params)
// }

// let messedge = setMasege(showMessadge, 'Hello world')
// console.log(messedge);

// arr.forEach(function(a,b,c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// })

// arr.forEach((a) => console.log(a));


// let fruits =[
//     {
//         name: 'applle'
//     },
//     {
//         name: 'chery'
//     }
// ]

// fruits.forEach((fruit) => {
//     fruit.price = Math.round(Math.random() * 150); 
//     console.log(fruit.name , fruit.price);
// })