
//1


function CarFactory(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
    this.motor = true
    this.run = function() {
        if (this.motor) {
            return false
        }
        console.log('Машина выключена');
    };
    this.stop = function() {
         if (this.motor == false) {
             return true
         }
         console.log('Машина заведена');
    }; 
    this.setName = function(a) {
        this.name = a
    };
    this.setColor = function(b) {
        this.color = b
    };
    this.setSpeed = function(c) {
        this.speed = c
    };
    this.getCarInfo = function() {
       console.log(this.name);
       console.log(this.color);
       console.log(this.speed);
       console.log(this.run());
       console.log(this.stop());
    };

};

let car = new CarFactory('BMW', 'Black', 200, );

let a = new CarFactory('Marc', 'Creen', 400);
a.getCarInfo()


// 2

function AnimalFactory(name, type) {
    this.name = name; 
    this.type = type;
    let isAlife = true

    if(type == 'млекопит'){
        this.food = 'трава';
    };
    if (type == 'хишник') {
        this.food = 'мясо'
    };
    if (type == 'млекопит') {
        this.lifeTime = 120
    }else{
        this.lifeTime = 100
    };
    this.die = function(){
        if (this.lifeTime !== 0) {
           console.log('isAlife');
        }else{
            console.log('ded');
        }
    };
    this.getAnimalInfo = function(){
        console.log(this.name);
        console.log(this.type);
        console.log(this.food);
        console.log(this.lifeTime);
        console.log(this.die());
    }
    
}
let sarah = new AnimalFactory('sarah', 'млекопит');
sarah.getAnimalInfo()


