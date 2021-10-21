// 1 задача
let i = 0;
let summ = 0
let summ2 = 0

while(i <= 20){
 if (i % 2 == !0){
   summ += i
 }
 if (i % 4 == 0){
   summ2 += i
 }
   i++;
}
console.log('Сумма всех нечетных чисел которые не делятся на 2 -> '+ summ)
console.log('Сумма всех чисел которые делятся на 4 без остатка -> ' + summ2)

// вторая задача 
for (let i = 0; i <= 50; i+=2){
  if (i >= 20 && i<= 40){
     continue
  }
  console.log(i)
} 



// 3 задача 

let i = 0;
do {
   if (i % 3 == 0 && i % 5 == 0){
       console.log('ping pong ' + i)
   }else if (i % 3 == 0){
       console.log('ping ' + i)
   }else if (i % 5 == 0){
       console.log('pong ' + i)
   }
      i++;
}while(i <= 100);