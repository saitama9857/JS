// let car1 = {
//   color: 'Dark',
//   name: 'Lexus ls400',
//   speed: 200,
//   price: 8000,
// };
// let car2 = {
//     color: 'Red',
//     name: 'Lexus RX 570',
//     speed: 150,
//     price: 15000,
// };
// let car3 = {
//     color: 'Yellow',
//     name: 'Tayota Centure',
//     speed: 100,
//     price: 10000,
// };
// let car4 = {
//     color: 'White',
//     name: 'Tayota CAMRY 3.5',
//     speed: 200,
//     price: 9000,
// };
// let car5 = {
//     color: 'Blue',
//     name: 'Tayota Mark 2',
//     speed: 220,
//     price: 8000,
// };

// let rresult = car1.speed + car2.speed + car3.speed + car4.speed + car5.speed 

// console.log('Total speed ' + rresult / 5) 

// if (car1.speed >= 150){
//    let a = car1.price += 2000
//     console.log(car1.name + ' ' + a)
// }
// if (car2.speed > 150){
//    let b = car2.price += 2000
//     console.log(car2.name + ' ' + b)
// }
// if (car3.speed > 150){
//     let c = car3.price += 2000
//     console.log(car3.name + ' ' + c)
// }
// if (car4.speed > 150){
//     let d = car4.price += 2000
//     console.log(car4.name + ' ' + d)
// }
// if (car5.speed > 150){
//     let e = car5.price += 2000
//     console.log(car5.name + ' ' + e)
// }

// const moto = {
//     color: 'blue',
//     price: 5000,
//     name: 'Bike',
// }

// moto.color = 'grey'
// moto.price = 18000

// console.log(moto)
// const user1 = {
//   name1:  'Aibek',
//   age1: 18,
//   isAdmin1: true,
// }
// const user2 = {
//     name2: 'Muzzi',
//     age2: 17,
//     isAdmin2: false,
// } 
// const user3 = {
//     name3: 'shef',
//     age3: 20,
//     isAdmin3: false,
// }

// if ( user1.isAdmin || user1.age1 >= 18 ){
//     console.log(user1.name1)
// } 
//  if (user2.isAdmin2 || user2.age2 >= 18 ){
//     console.log(user2.name2)
// } 
//  if (user3.isAdmin3 || user3.age3 >= 18){
//     console.log(user3.name3)
// } 
 

let notepad1 = {
    name: 'Aser',
    canModify: true,
    price: 26000,
    graphicsСard: 3, // от 1 до 10
    cpu: 2, // от 1 до 10
  }
  
let  notepad2 = {
    name: 'MacBook',
    canModify: false,
    price: 100000,
    graphicsСard: 9, // от 1 до 10
    cpu: 5, // от 1 до 10
  }
let notepad3 = {
    name: 'HP',
    canModify: true,
    price: 40000,
    graphicsСard: 7, // от 1 до 10
    cpu: 4, // от 1 до 10
  }



if (notepad1.canModify == true){
    notepad1.ssd = 10;
}
if (notepad1.graphicsСard || notepad1.cpu > 5){
    notepad1.price += 500
}
if (notepad1.graphicsСard && notepad1.cpu > 5){
    notepad1.price += 1200
}
if (notepad1.graphicsСard || notepad1.cpu || notepad1.ssd > 5){
    notepad1.price += 1900
}
console.log(notepad1)




if (notepad2.canModify == true){
    notepad2.ssd = 10;
}
if (notepad2.graphicsСard || notepad2.cpu > 5){
    notepad2.price += 500
}
if (notepad2.graphicsСard && notepad2.cpu > 5){
    notepad2.price += 1200
}
if (notepad2.graphicsСard || notepad2.cpu || notepad2.ssd > 5){
    notepad2.price += 1900
}

notepad2. flagship = true;
console.log(notepad2)



if (notepad3.canModify == true){
    notepad3.ssd = 10;
}
if (notepad3.graphicsСard || notepad3.cpu > 5){
    notepad3.price += 500
}
if (notepad3.graphicsСard && notepad3.cpu > 5){
    notepad3.price += 1200
}
if (notepad3.graphicsСard || notepad3.cpu || notepad3.ssd > 5){
    notepad3.price += 1900
}
console.log(notepad3)

