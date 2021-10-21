
                                                           // ЗАМЫКАНИЕ 

// function UrlGeneretot(domain) {
//     return function(url) {
//         return `https:\\${url}.${domain}`
//     }
// }

// let com = UrlGeneretot('com')

// console.log(com('google'));

// class Rectangle {
//    high;
//    weigh;

//  constructor(high, weigh){
//     this.high = high;
//     this.weigh = weigh;
//  }

//  get x(){
//     return this.weigh
//  }
//  set x(value){
//      if (value <= 0) {
//          this.weigh = 1; 
//      }else{
//          this.weigh = value;
//      }
     
//  }

//  calcArea(){
//     return this.high * this.weigh; 
//  }
//  calcperi(){
//      return (this.high * this.weigh) * 2;
//  }
// }

// let reck = new Rectangle( 2 , 5 )
// // reck.calcArea()
// reck.x = -2
// console.log(reck);


// class User{
//     _userName;
//     _password;
//     _id;

//     constructor(userName, password){
//         this.userName = userName;
//         this.password = password;
//         this._id = Math.round(Math.random() * 100);
//     }

//     get userName() {
//         return this._userName;
//     }
//     set userName(value) {
//         this._userName = value;
//     }


//     get password() {
//         return this._password;
//     }
//     set password(value) {
//         this._password = value;
//     }


//     get id() {
//         return this._id;
//     }

    
// }
// let user = new User('Aibek', 123456 + 'Applle')
// user.userName = 'Samat'
// console.log(user);


// class Person{
    

//     constructor(objeck){
//         this.firstName = objeck.firstName;
//         this.lastName = objeck.lastName;
//         this.age = objeck.age;
//     }

    // get firstName() {
    //     return this._firstName;
    // }
    // set firstName(value) {
    //     this._firstName = value;
    // }


    // get lastName() {
    //     return this._lastName;
    // }
    // set lastName(value) {
    //     this._lastName = value;
    // }

    // get age() {
    //     return this._age;
    // }
    // set age(value) {
    //     if (value < 0) {
    //         this._age = 0
    //     }else{
    //     this._age = value;
    //     }
    // }


// }

// class Employee extends Person{
//     constructor(objeck){
//         super(objeck);
//         this.inn = objeck.inn;
//         this.number = objeck.number;
//         this.snils = objeck.snils;
//     }

    
//     get inn() {
//         return this._inn;
//     }
//     set inn(value) {
//         this._inn = value;
//     }
//     number
// }

// let employee1 = new Employee({firstName:'Aibek', lastName:'Koshmatov', age:20})
// console.log(employee1);
// const season = {
//     winter: 'winter',
//     summer: 'summer',
//     autumn: 'autumn',
//     spring: 'spring',
//     multi: 'multi'
// }


// class Product {
//     constructor(option){
//         this.name = option.name;
//         this.standardPrice = option.standardPrice;
//     }
// }
// class Edible extends Product {
//     constructor(option){
//         super(option);
//         this.season = option.season
//     }
//     get price(){
//         if(this.season.includes(season) || this.season.includes(season.multi)){
//             return this.standardPrice
//         }
//         return this.standardPrice * 1.5;
//     }
// }

// const edibleProducts = [
//     {
//         name: 'Banana',
//         standardPrice: 90,
//         season: [season.multi]
//     },
//     {
//         name: 'Apple',
//         standardPrice: 90,
//         season: [season.summer, season.autumn]
//     },
//     {
//         name: 'Meat',
//         standardPrice: 90,
//         season: [season.autumn, season.spring, season.summer]
//     },
//     {
//         name: 'Bread',
//         standardPrice: 90,
//         season: [season.multi]
//     }
// ]

// function prducts(){
//     return edibleProducts.map((product) => {
//         return new Edible(product);
//     })
// }
// // console.log(prducts());

// class Electro extends Product{
//     constructor(option){
//         super(option);
//         this.energy = option.energy;
//         this.workTime = option.workTime;
//     }

  
//     get price() {
//         return this.standardPrice * this.energy + this.workTime
//     }

//     broke(){
//         this.workTime = 0;
//         console.log('broke');
//     }
// }

// const electroPro = [
//     {
//         name: 'lenova',
//         standardPrice: 90,
//         energy: 10,
//         workTime: 5
//     },
//     {
//         name: 'aver',
//         standardPrice: 90,
//         energy: 100,
//         workTime: 6
//     },
//     {
//         name: 'apple',
//         standardPrice: 90,
//         energy: 200,
//         workTime: 8
//     },
//     {
//         name: 'android',
//         standardPrice: 90,
//         energy: 1100,
//         workTime: 9
//     }
// ]


// function produc() {
//    return electroPro.map((e) => {
//         return new Electro(e)
//     })
// }
// let a = produc()
// a.forEach((e) => {
//     e.broke()
// })
// console.log(a);




// class Car{
//     constructor(Object_Car){
//         this.name = Object_Car.name;
//         this.speed = Object_Car.speed;
//         this.color = Object_Car.color;
//         this.details = Object_Car.details;
//     };
   
//     get Car_Price() {
//         return this.Car_Price;
//     }
//     calc_speed(){
//         if (this.enginx == 'JZ2') {
//              this.speed  *= 2;
//              return this.speed
//         }
       
//     }
// };

// class Detail{
//     constructor(Object_Detail){
//         this.engin = Object_Detail.engin;
//         this.gear = Object_Detail.gear;
//         this.break = Object_Detail.break;
//     };  
   
// };

// class DriftCar extends Car{
//     constructor(Object_Car){
//         super(Object_Car)
//         this.hasTune = Object_Car.hasTune; 
//     }
//     drift(){
//         if (this.hasTune) {
//         }
//     }

// }

// let call_classes_Car = new Car({
//     name: 'BMW', 
//     speed: 240, 
//     color: 'white',
//     details: new Detail({
//         engin:'JZ2',
//         gear: 5,
//         break: 5
//     })  
// })
// call_classes_Car.calc_speed()
// console.log(call_classes_Car);

// let call_classes_Drift = new DriftCar({
//     name: 'Mers', 
//     speed: 300, 
//     color: 'Dark',
//     hasTune: true,
//     details: new Detail({
//         engin: 'GT',
//         gear: 6,
//         break: 7,
//     })
// })
// call_classes_Drift.drift()
// console.log(call_classes_Drift);




// class Laptop {
//     constructor(options){
//         this.name = options.name;
//     }
//     get price() {
//         return this.name === 'mac' ? 2000 : 1000
//     }
//     set setName(name) {
//         if (name  === ) {
            
//         }
//     }
// }

// let obj = new Laptop ({name: 'Lenova'})
// console.log(obj.price);
// obj.setName('mac');
// console.log(obj.price);


// class Laptop {
//     constructor(option){
//         this.name = option.name
//         this.details = option.details
//     }
//     get price() {
        
//     }

// }

// let a = new Laptop({name: 'mac' , details:[{ name:'cpu' , price: 600}]})
// console.log(a.price());


let states = [
    {
        name: 'active',
        order: 1
    },
    {
        name: 'sold',
        order: 2
    }
]


let cellphones = [
    {
        name: 'samsumng',
        price: 16_000,
        states: states[0]
    },
    {
        name: 'iphone',
        price: 100_000,
        states: states[1]
    },
    {
        name: 'redmi',
        price: 10_000,
        states: states[0]

    },
    {
        name: 'onor',
        price: 20_000,
        states: states[1]
    },
    {
        name: 'nokia',
        price: 1_000,
        states: states[0]
    }
]

// let sortt = cellphones.sort(function(a, b) {
//     return a.states.order - b.states.order;
// })
// console.log(sortt);

// let sorttt = cellphones.sort((a,b) => {
//     return a.cellphones.price - b.cellphones.price;
// })
// console.log(sorttt);

// let filter = cellphones.filter((a,b) =>{
//     price = 0

// })

// const sumItems = () => {
// let sum = 0;
// let sam = 0;
// cellphones.forEach(function(item) {
//     if (item.states.order === 1) {
//         sum += item.price;
//     }else if(item.states.order === 2){
//         sam += item.price;
//     }
    
// })
// console.log(sum, sam);
// };

// sumItems();
let sum = 0;
let test = cellphones.filter((e) => {
    if (e.states.order === 1) {
        return sum += e.price;
    }
})

console.log(test, sum);

