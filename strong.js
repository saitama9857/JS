// function show() {
//     console.log(this.messedge);
// }

// let obj1 = {
//     messedge : 'yoo'
// }

// let obj2 = {
//     messedge : 'hi'
// }

// let obj3 = {
//     messedge : 'by'
// }

// let obj4 = {
//     messedge : 'fuck of'
// }

// let obj5 = {
//     messedge : 'bitch'
// }

// show.call(obj1)
// show.call(obj2)
// show.call(obj3)
// show.call(obj4)
// show.call(obj5)

// function show(message) {
//     console.log('hello');
// }
// function showTex(callback) {
//     return callback
// }

// showTex(show())


//  Замыкание 

// function counter() {
//     let num = 0;
//     return function() {
//         return ++num;
//     }
// }
// let count = counter();
// console.log(count());


// let arr = [
//     {
//         name: 'bob',
//         age: 10
//     },
//     {
//         name: 'Gon',
//         age: 12
//     },
//     {
//         name: 'kilua',
//         age: 13
//     },
//     {
//         name: 'zoro',
//         age: 21
//     },
//     {
//         name: 'lufi',
//         age: 19
//     },
//     {
//         name: 'nami',
//         age: 20
//     },
//     {
//         name: 'franki',
//         age: 36
//     },
//     {
//         name: 'robin',
//         age: 31
//     },
//     {
//         name: 'brook',
//         age: 90
//     },
//     {
//         name: 'jimbey',
//         age: 40
//     },
    
// ]

// let adult = arr.filter((Object) => Object.age > 18);
// let adult = arr.filter(function(Object) {
//     return Object.age > 18
// }) 
// console.log(adult);
// let nameLong = arr.filter((Object) => Object.name.length > 3)
// console.log(nameLong);
// маперы


// let newarr = arr.map((params) => {
//     if (params.age > 30) {
//         params.age -= 10
//     }
//     return params
// })
// console.log(newarr);

// let i = 0;

// while(i < arr.length){
//     arr[i].name = i
//     i++;
// }
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     arr[i].name = i    
// }
// console.log(arr);

// for (const key in arr) {
//      arr[key].name = key
    
// }
// console.log(arr);

// arr.forEach((element, index ) => {
//     element.name = index
// });
// console.log(arr);
// let newwarr = arr.map((e , i) =>{
//     e.name = i
// })
// console.log(arr);

// let str = 'hi wasts up nigga'
// let str2 = str.split(' ').join('')
// console.log(str2);


// TASK 1

// const salaries = [500, 300, 600, 400];
// let count = 0;
// let averg = 0;
// salaries.forEach((e)=> {
//   count += e
// });
// averg = count / salaries.length
// console.log(count);
// console.log(averg);


//TASK 2

// const users = [ 
//   {age: 20, name: 'john'}, 
//   {age: 30, name: 'berry'},
//   {age: 15, name: 'Jimmy'} 
// ] 

// let adult = users.filter((e) => {
//   return e.age > 18
// })
// console.log(adult);

// TACK 3

// const flowers = [ 
//   { name: 'rouse', price: 300 }, 
//   { name: 'sunflower', price: 1000}, 
//   {name: '101 rouse', price: 3000 },
// ]

// let a = flowers.map((e) =>{
//   if (e.price > 200 && e.price <= 900) {
//         e.flowerswithdiscount = e.price - (e.price / 100) * 5
//   }else if (e.price > 900 && e.price <= 2500){
//         e.flowerswithdiscount = e.price -  (e.price / 100) * 15
//   }else{
//         e.flowerswithdiscount = e.price -  (e.price / 100) * 20
//   }return e
  
// })
// console.log(a);

// TASK 4

// let words = ["учу", "готовлю", "красный", "летаю", "пишу", 
//                "слушаю", "пою", "танцую", "жава", "скрипт"]

// let arr = words.filter((e) =>
//     e === 'учу' || e === 'жава' || e === 'скрипт'
// ).join(' ')

// console.log(arr);

// let newArr = words.filter((e) =>
// e === 'пишу' || e === 'жава' || e === 'скрипт'
// ).join(' ')

// console.log(newArr);

// function Cornstractor(name, age, adult) {
//    this.name = name;
//    this.age = age;
//    this.adult = adult;
// }
// let a = new Cornstractor('bob', 23, true)
// console.log(a);

//CLass

// class Car {
//     constructor(name, speed, price){
//         this.name = name;
//         this.speed = speed;
//         this.price = price
//         this.isActive = false;
//     }
//     run(){
//         if(this.isActive){
//            console.log('уже заведена');
//         }
//         console.log('завелась');
//         this.isActive = true
//     }
//     change(){
//         this.isActive = !this.isActive
//         this.isActive ? console.log('завели') : console.log('заглушили');
//     }
// }

// const bmw = new Car('bmw', 240, 9000);
// bmw.run()
// bmw.change()
// bmw.change()
// console.log(bmw);

// class Robot {
//     constructor(name, power){
//         this.name = name;
//         this.power = power;
//         this.isAlife = true;
//         }
//         action(){
//             console.log(`${this.name}стой нигер ${this.power}`);
//         }

        
//     }

//     let robot = new Robot('Шваль ' , 10)
//     robot.action()
//     console.log(robot);


// // class PremiumCars extends Car{
// //     constructor(name, speed,price,  type){
// //         super(name, speed, price)
// //         this.type = type
// //     }
// // }
// // const porshe = new PremiumCars();
// // console.log(porshe);

// class Autobots extends Robot{
//     constructor(name, power, type){
//         super(name, power)
//         this.type = type
//     }
//     fly(){
//         console.log(this.name, 'летает', this.type);
//     }
// }
// let aut = new Autobots('bambolbi', 10, 'autobots')
// aut.fly()
// console.log(aut);

// class Deseptecon extends Robot{
//     constructor(name, power, type){
//         super(name, power)
//         this.type = type
//     }
//     ride(){
//         console.log(this.name, 'едет', this.type);
//     }
// }
// let int = new Deseptecon('megatron', 10 ,'desepticon')
// int.ride()
// console.log(int);


