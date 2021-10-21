
// TASK 1

const salaries = [500, 300, 600, 400];
let count = 0;
let averg = 0;
salaries.forEach((e)=> {
  count += e
});
averg = count / salaries.length
console.log(count);
console.log(averg);


//TASK 2

const users = [ 
  {age: 20, name: 'john'}, 
  {age: 30, name: 'berry'},
  {age: 15, name: 'Jimmy'} 
] 

let adult = users.filter((e) => {
  return e.age > 18
})
console.log(adult);

// TACK 3

const flowers = [ 
  { name: 'rouse', price: 300 }, 
  { name: 'sunflower', price: 1000}, 
  {name: '101 rouse', price: 3000 },
]

let a = flowers.map((e) =>{
  if (e.price > 200 && e.price <= 900) {
        e.flowerswithdiscount = e.price - (e.price / 100) * 5
  }else if (e.price > 900 && e.price <= 2500){
        e.flowerswithdiscount = e.price -  (e.price / 100) * 15
  }else{
        e.flowerswithdiscount = e.price -  (e.price / 100) * 20
  }return e
  
})
console.log(a);

// TASK 4

let words = ["учу", "готовлю", "красный", "летаю", "пишу", 
               "слушаю", "пою", "танцую", "жава", "скрипт"]

let arr = words.filter((e) =>
    e === 'учу' || e === 'жава' || e === 'скрипт'
).join(' ')

console.log(arr);

let newArr = words.filter((e) =>
e === 'пишу' || e === 'жава' || e === 'скрипт'
).join(' ')

console.log(newArr);