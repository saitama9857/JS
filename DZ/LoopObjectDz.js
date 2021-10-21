
let cars = [
    {
      name: 'Honda Fit',
      color: 'red',
      speed: 130,
      price: 2000,
      type: 'cheap',
    },

    {
      name: 'Honda Jazz',
      color: 'space grey',
      speed: 150,
      price: 3000,
      type: 'cheap',
    },

    {
      name: 'Tayota Carola',
      color: 'Braun',
      speed: 160,
      price: 4000,
      type: 'cheap',
    },

    {
      name: 'Tayota Camry 3.5',
      color: 'Dark Blac',
      speed: 180,
      price: 7000,
      type: 'cheap',
    },

    {
      name: 'Mersedes  W140 S 700',
      color: 'Grey',
      speed: 180,
      price: 7000,
      type: 'cheap',
    },

    {
      name: 'Mersedes S 600',
      color: 'red',
      speed: 200,
      price: 10000,
      type: 'cheap',
    },

    {
      name: 'Lexus ls 400',
      color: 'Dark-Blue',
      speed: 180,
      price: 6000,
      type: 'cheap',
    },
  
    {
      name: 'Lexus RX 470',
      color: 'White',
      speed: 150,
      price: 17000,
      type: 'cheap',
    },

    {
      name: 'Lexus RX 570',
      color: 'Black',
      speed: 140,
      price: 30000,
      type: 'cheap',
    },

    {
      name: 'Daewoo Tico',
      color: 'Red',
      speed: 130,
      price: 2000,
      type: 'cheap',
    },

    {
      name: 'Tayota Mark 2',
      color: 'White',
      speed: 220,
      price: 4000,
      type: 'cheap',
    },

    {
      name: 'Tayota Supra',
      color: 'Orange',
      speed: 250,
      price: 8000,
      type: 'cheap',
    }
]

let cheepCars = [];
let standardCars = [];
let premiumCars = [];

for (let i = 0; i < cars.length; i++){
  if(cars[i].speed > 140 && cars[i].speed < 170 ){
    cars[i].price += 500
    cars[i].type = 'standart'
  }
  if (cars[i].speed > 170){
    cars[i].price += 1200
    cars[i].type = 'premium'
  }
  if ( cars[i].type === 'cheap'){
    cheepCars.push(cars[i]);
  }
  if  ( cars[i].type === 'standart'){
    standardCars.push(cars[i]);
  }
  if  ( cars[i].type === 'premium'){
    premiumCars.push(cars[i]);
  } 
}

let AllSum = 0;
let avarageOfCheepCars = 0
for (let i = 0; i < cheepCars.length; i++) {
    AllSum += cheepCars[i].price
    avarageOfCheepCars = AllSum / cheepCars.length
}

let Allsum2 = 0;
let avarageOfStandartCars = 0
for (let i = 0; i < standardCars.length; i++) {
    Allsum2 += standardCars[i].price
    avarageOfStandartCars = Allsum2 / standardCars.length
}

let AllSum3 = 0;
let avarageOfPremiumCars = 0
for (let i = 0; i < premiumCars.length; i++) {
    AllSum3 += premiumCars[i].price
    avarageOfPremiumCars = AllSum3 / premiumCars.length
}

let max1 = 0;
let min1 = 0
for (let i = 0; i < cheepCars.length; i++) {
    if( i === 0){
      max1 = cars[i].price;
      min1 = cars[i].price;
    }
    if(cars[i].price > max1){
      max1 = cars[i].price
    }
    if(cars[i].price < min1){
      min1 = cars[i].price
    }

}

let max2 = 0;
let min2 = 0;
for (let i = 0; i < standardCars.length; i++) {
  if ( i === 0){
    max2 = standardCars[i].price
    min2 = standardCars[i].price
  }
  if (standardCars[i].price > max2){
      max2 = standardCars[i].price
  }
  if (standardCars[i].price < min2){
      min2 = standardCars[i].price
  }
}

let max3 = 0;
let min3 = 0;
for (let i = 0; i < premiumCars.length; i++) {
  if (i === 0){
    max3 = premiumCars[i].price;
    min3 = premiumCars[i].price;
  }
  if (premiumCars[i].price > max3){
    max3 = premiumCars[i].price;
  }
  if (premiumCars[i].price < min3){
    min3 = premiumCars[i].price
  }
}

console.log(cheepCars);
console.log('Средняя цена для автомобилей Эканом класса ' + avarageOfCheepCars);
console.log('Самая дорогая машина Эканом класса ' + max1);
console.log('Самая дешовая машина Эканом класса ' + min1);
console.log('-------------------');


console.log(standardCars);
console.log('Средняя цена для автомобилей Стандарт класса ' + avarageOfStandartCars);
console.log('Самая дорогая машина Стандарт класса ' + max2);
console.log('Самая дешовая машина Стандарт класса ' + min2);
console.log('------------------');

console.log(premiumCars);
console.log('Средняя цена для автомобилей Премиум класса ' + avarageOfPremiumCars);
console.log('Самая дорогая машина Премиум класса ' + max3);
console.log('Самая дешовая машина Премиум класса ' + min3);
