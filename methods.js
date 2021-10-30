// const clothes = require('./clothes')
// const technics = require('./data')
// let result = [];
//     clothes.products.forEach(e => {
//     if(e.isSold == true ){
//         result = e;
//         return
//     }
// });
// console.log(result);
// let result2 = [];
// technics.products.forEach(e => {
//     if(e.isSold == true ){
//         result2 = e;
//         return
//     }
// });
// console.log(result2);

// const data = require('./data');
// data.calc(5,5);


const data = {
    arr: [1,2,3,432,2,1,4,543,346,23,4,46],
    filter: function (callback) {
        let newArr = []
       for (let i = 0; i < this.arr.length; i++) {
           if (callback(this.arr[i])) {
               newArr.push(this.arr[i])
           }
       }
       return newArr
    }
}

let a = data.filter((i) => {
    return i > 5
})

console.log(a);