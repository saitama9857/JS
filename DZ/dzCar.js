let allCars = [];
let ecoCollection = { 
    name: 'Эконом', 
    cars: [] 
};
let standardCollection = { 
    name: 'Стандарт', 
    cars: [] 
};
let premiumCollection = {
     name: 'Премиум', 
     cars: [] 
};

for (let i = 0; i <= 12; i++) {
    allCars.push(createCar())
};

function createCar() {
    return car = {
        name: "",
    };
};
for (const iterator of allCars) {
    iterator.name = setCarName();
    iterator.speed = setCarSpeed();
    iterator.color = setCarColor();
    iterator.type = setCarType(iterator.speed);
    iterator.price = setCarPrice();
    sortCars(iterator, iterator.type)
}

function setCarName() {
    let nameOfCars = Math.round(Math.random() * (12 - 1) + 1)
    switch (nameOfCars) {
        case 1:
            nameOfCars = 'Mercedes'
            break;
        case 2:
            nameOfCars = 'Tayota'
            break;
        case 2:
            nameOfCars = 'Levraletto'
            break;
        case 3:
            nameOfCars = 'BMW'
            break;
        case 4:
            nameOfCars = 'Honda'
            break;
        case 5:
            nameOfCars = 'Volvo'
            break;
        case 6:
            nameOfCars = 'Daf'
            break;
        case 7:
            nameOfCars = 'Subaru'
            break;
        case 8:
            nameOfCars = 'Ford'
            break;
        case 9:
            nameOfCars = 'Buggatti'
            break;
        case 10:
            nameOfCars = 'Lambargini'
            break;
        case 11:
            nameOfCars = 'Audi'
            break;
        case 12:
            nameOfCars = 'Ferrari'
            break;
        default:
            console.log('Nooooo');
            break;
    }
    return nameOfCars
};
function setCarSpeed() {
     return speed = Math.round(Math.random() * (300 - 100) + 100);
};
function setCarColor() {
    let  colorOfCars = Math.round(Math.random() * (12 - 1) + 1)
    switch (colorOfCars) {
        case 1:
            colorOfCars = 'White'
            break;
        case 2:
            colorOfCars = 'SpaceGray'
            break;
        case 2:
            colorOfCars = 'Grey'
            break;
        case 3:
            colorOfCars = 'Dark'
            break;
        case 4:
            colorOfCars = 'whiteBlue'
            break;
        case 5:
            colorOfCars = 'Brown'
            break;
        case 6:
            colorOfCars = 'MilkColor'
            break;
        case 7:
            colorOfCars = 'Blue'
            break;
        case 8:
            colorOfCars = 'DarkBlue'
            break;
        case 9:
            colorOfCars = 'yellow'
            break;
        case 10:
            colorOfCars = 'black'
            break;
        case 11:
            colorOfCars= 'green'
            break;
        case 12:
            colorOfCars = 'red'
            break;
        default:
            console.log('Nooooo');
            break;
    }
    return colorOfCars
};
function setCarType(speed) {
    if(speed < 150){ return 'econom'}
    if(speed >= 150 && speed < 200){ return 'standard'}
    if(speed >= 200){ return 'premium'}
};

function setCarPrice(type, color,){
    let price = 2000;
    if(type === 'standard'){ price += 500;}
    if(type === 'premium'){ price += 1500;}
    if(color === 'red'){ price += 300}
    if(color === 'yellow'){ price += 200}
    price += Math.round(Math.random() * 500)
    return price
}
allCars.price = setCarPrice(allCars.type, allCars.color)

function sortCars(car, type){
    switch(type){
        case 'econom':
            ecoCollection.cars.push(car)
            break
        case 'standard':
            standardCollection.cars.push(car)
            break
        case 'premium':
            premiumCollection.cars.push(car)
            break
    }
}
sortCars(allCars, allCars.type)

function getStatistics(collection){
    if(collection.cars.length === 0){console.log('В', collection.name, 'коллекции машин нету')}
    else{
        let allSum = 0;
        let theMostExpensive = collection.cars[0];
        let theCheapest = collection.cars[0];
            for(i = 0; i < collection.cars.length; i++){
                allSum += collection.cars[i].price
                if(collection.cars[i].price > theMostExpensive.price){theMostExpensive = collection.cars[i]}
                if(collection.cars[i].price < theCheapest.price){theCheapest = collection.cars[i]}
            }
        
    
        let average = allSum/collection.cars.length;
        console.log('Статистика по', collection.name, 'машинам:')
        console.log('Количество машин:', collection.cars.length);
        console.log('Общая цена парка:', allSum);
        console.log('Средняя цена парка:', average);
        console.log('Самая дорогая машина:', theMostExpensive);
        console.log('Самая дешевая машина:', theCheapest);
        }
    }
        
    
getStatistics(ecoCollection)
getStatistics(standardCollection)
getStatistics(premiumCollection)
