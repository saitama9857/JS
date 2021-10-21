//Task 1


class Car{
    constructor(Object_Car){
        this.name = Object_Car.name;
        this.speed = Object_Car.speed;
        this.color = Object_Car.color;
        this.details = Object_Car.details;
    };
};

class Detail{
    constructor(Object_Detail){
        this.name = Object_Detail.name;
        this.type = Object_Detail.type;
        this.power = Object_Detail.power;
    };
   
};

class DriftCar extends Car{
    constructor(Object_Car){
        super(Object_Car)
        this.hasTune = Object_Car.hasTune; 
    }
    drift(){
        if (this.hasTune) {
            console.log(this.name, 'Can Drift');
        }
    }

}

let call_classes_Car = new Car({
    name: 'BMW', 
    speed: 240, 
    color: 'white',
    details: new Detail({
        name:'Mark2',
        type: 'Mehanic',
        power: 500
    })  
})
console.log(call_classes_Car);

let call_classes_Drift = new DriftCar({
    name: 'Mers', 
    speed: 300, 
    color: 'Dark',
    hasTune: true,
    details: new Detail({
        name: 'Mers GT',
        type: 'Automatic',
        power: 700,
    })
})
call_classes_Drift.drift()
console.log(call_classes_Drift);

//Task 2

class Animal {
    constructor(Object_Animal){
        this.name = Object_Animal.name;
        this.age = Object_Animal.age;
    };
    breathe(){
        console.log('yo');
    };
    sleep(){

    };
};

class WildAnimal extends Animal{
    constructor(Object_Animal){
        super(Object_Animal);
        this.isHungry = Object_Animal.isHungry;
    };
    breath() {
        super.breathe()
        if (this.isHungry) {
            console.log('start hunting');
        }
    }
};

let call_WildAnimal = new WildAnimal({
    name: 'Lion',
    age: 12,
    isHungry: false,
})
call_WildAnimal.breath()
console.log(call_WildAnimal);


//Task 3

