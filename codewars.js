
// function check(a) {
//   a.split('')
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].includes('.')) {
//        a[i].replace('[]')
//     }
//   }
//   return a
// }

// console.log(check( "1.1.1.1"));

// const rps = (p1, p2) => {
 
//     if (p1 === p2) {
//       return `Draw!`;
//     }
//     if (p1 === 'rock' && p2 === 'scissors') {
//       return `Player 1 won!`;
//     } else if (p1 === 'paper' && p2 === 'rock') {
//       return `Player 1 won!`;
//     } else if (p1 === 'scissors' && p2 === 'paper') {
//       return `Player 1 won!`;
//     } else {
//       return `Player 2 won!`;
//     }
  
// };

// rps('scissors', 'scissors')

function Duplicate(nums) {
  if (nums === null || nums.length === 0)
    return false;
  let params = nums.length;
  for (let i = 0; i < params; i++) {
    for (let j = i + 1; j < params; j++) {
      if (params[i] == params[j]) {
        return true
      }else{
        return false
      }
    }
  }
  return false
}
Duplicate([1,2,3,4,5])

// https://leetcode.com/problems/contains-duplicate/submissions/