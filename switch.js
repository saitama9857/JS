// let x = 'Hello';

// switch (x) {
//     case 'Hello':
//         console.log(2);
//         // break;
//         return "bob"
//     case 'Hello':
//         console.log(1);
//         break;

//     default:
//         break;
// }

// let cars = [1,2,3,4,5,6,7]
// let obj = {
//     name: 'Bob',
//     age: 33,
//     isAdmin: false,
// }
// for (const key in obj) {
//     console.log(key);
// }
// for (const car of cars) {
//     console.log(car);
// }


// let shaitanAraba = {
//     name: "",
//     color: '',
//     age: 12,
//     speed: 10,
// };

// for (const key in shaitanAraba) {
//    console.log(key);
// };

// let numbers = [23, 53, 64, 75, 86];

// for (const iterator of numbers) {
//     console.log(iterator);
// }

// let func = () =>{

// }
// let random = Math.round(Math.random() * (5 - 1) + 1);
// switch (random) {
//     case 1:
//         console.log('Мало');
//         break;
//     case 2:
//         console.log('не хватает');
//         break;
//     case 3:
//         console.log('почти'); 
//         break;
//     case 4:
//         console.log('готова');     
//         break;
//     case 5:
//         console.log('перебор');  
//         break;
//     default:
//         console.log('defoult');
//         break;
// }

// while( true ){
//     let random = Math.round(Math.random() * (5 - 1) + 1);
//     if (random == 4) {
//         console.log(random);
//         break;
//     }
// }


// let car = {
//     fuel: 100,
//     run: function() {
//         this.car.fuel -= 20;
//     },
//     fil: function() {
//         this.car.fuel += 20;
//     },
// }

// car.run()

// console.log(car.fil());




// let battman = {
//     hp: 100,
//     armor: 50,
//     power: 20,
//     attack: function() {
//         superman.hp -= this.power
//     },
//     getDamage: function(damage) {
//         this.hp -= damage
//     },
// }

// let superman = {
//     hp: 1000,
//     armor: 50,
//     power: 80,
//     attack: function() {
//         // battman.hp -= this.power 
//         return this.power
//     },
// }

// let supermanDamage = superman.attack()
// battman.getDamage (supermanDamage)
// // superman.attack()
// console.log(battman);



// const phone = {
//     model: 'Nokia 3310',
//     call: function() {
//         console.log('Набираю номер ...');
//     },
// };

// phone.call();


// let user = {
//     age: 21,
//     celebrateBirthday: function() {
//        return this.age++
       
//     },
// }
// user.celebrateBirthday()
// console.log(user);


// const car = {
//     fuel: 100,
//     run: function() {
//         this.fuel -= 10;
//     },
//     fill: function(liters) {
//         this.fuel += liters;
//     },
// }

// car.fill(20);
// console.log(car);




// const phone = {
//     model: 'Nokia 3310',
//     call: function(name = 'Noname') {
//         console.log(`Набираю номер ${name}`);
//     },
// };

// let user = {
//     age: 21,
//     name: 'Bob',
//     celebrateBirthday: function() {
//        return this.age++
       
//     },
// }

// phone.call(user.name);

// user.celebrateBirthday()
// console.log(user);



// function getAccess(role) {
//     switch (this.role) {
//         case 'Admin':
//             return console.log('Админский доступ');
//         // case user:
//         //     return console.log('Добро пожаловать дорогой');
//         // case guest:
//         //     return console.log('Авторизируйтес пожалуйста');
//         default:
//             console.log('nooo');
//             break;
//     }
// }


// const user = {
//     name: 'Bob',
//     role: 'Admin',
//     login: getAccess(this.role),
// }
// function canLogin(user) {
//     return user.login;
// }

// console.log(canLogin(user));


// let car = {
//     speed: 100,
//     type: 'standart',
//     color: 'red',
//     showStatisticks: function() {
//         for (const key in car) {
//            console.log(key);
//            console.log(Object.values(this.car));
//         }
//     }
// }
    
// car.showStatisticks()






// ПЕРЕПИСАТЬ НА*ЕР 







// function calculateDamage(armor, damage) {
//     if (damage > armor) {
//         return damage - armor;
//     }
//     return 0
// }

// let desepticon = {
//     name: 'Megatron',
//     hp: 100,
//     armor: 50,
//     power: 15,
//     attac: function() {
//         return this.power;
//     },
//     getDamage: function(damage) {
//         let partDamage = damage / 2;
//         let restDamage = calculateDamage(this.armor, partDamage)
//         this.hp -= partDamage + restDamage;
//         if (partDamage > this.armor) {
//             return this.armor = 0;
//         }
//         this.armor -= partDamage;
//     }
// }

// let autobote = {
//     name: 'Optimus',
//     hp: 100,
//     armor: 50,
//     power: 15,
//     attac: function() {
//         return this.power;
//     },
//     getDamage: function(damage) {
//         let partDamage = damage / 2;
//         let restDamage = calculateDamage(this.armor, partDamage)
//         this.hp -= partDamage + restDamage;
//         if (partDamage > this.armor) {
//             return this.armor = 0;
//         }
//         this.armor -= partDamage;
//     }
// }

// while(true) {
//     let  a = Math.round(Math.random());
//     if (a == 0) {
//         let Damage = desepticon.attac()
//         autobote.getDamage(Damage)
//     }if (autobote.hp <= 0) {
//         console.log('Проиграли Автоботы');
//         console.log(autobote);
//         break;
//     }if (a == 1) {
//         let DDamage = autobote.attac()
//         desepticon.getDamage(DDamage)
//     }if (desepticon.hp <= 0) {
//         console.log('Проиграли Десептиконы ');
//         console.log(desepticon);
//         break
//     }
// }




// const season = 'summer'

// let arr = 
//     {
//         name: 'Mango',
//         price: 20,
//         season: 'summer',
//         setPrice: function() {
//             if (this.season == season) {
//                return this.price += 100;
//             }else{
//                 return this.price
//             }
//         },
//         showFruit: function() {
//             console.log(arr);
//         }

//     }

arr.showFruit();
const season = 10

    let mango = {
        price: 100,
        season: 10,
        show: function () {
             if (season == this.season) {
                 return this.price += 100;
             }else{
                return this.price += 100;
             }
            
        }
        
    }

    console.log(mango);