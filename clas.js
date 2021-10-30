


class Category {
    constructor() {
        // ...
    }

    addDish() {
        // 
    }

    removeDish() {
        //
    }

    print() {
        // вывести в консоль инфу по категории
    }
}

// pintFreeDishes() // вывести блюда без категории
class Dish {
    constructor() {
    bar: {
        name: 'Bar',
        dishes = [
            {
                category: 'Bar',
                name: 'vodka',
                price: 123,
            },
        ]
    }
    breakfasts: {
        name: 'Breakfasts',
        dishes = [
            {
                category: 'Breakfasts',
                name: 'sandwitch',
                price: 50,
            },
        ]
    }
}
}

const bar = new Category('bar', [new Dish()])
console.log(bar);