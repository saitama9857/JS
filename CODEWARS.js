// let arr = [1,2,3,4,5,6,7,8]
// let N = arr.length 
// let x  = [];
// for (let i = 0; i < N/2; i++) {
//     x = arr[i];
//     arr[i] = arr[N - 1 - i];
//     arr[N - 1 - i] = x;
// }
// console.log(arr);

function repeatStr (n, s) {
    let a = ''
    for (let i = 0; i < n; i++) {
          a += s
    }
    return a
}
console.log(repeatStr(4 , 'L'));