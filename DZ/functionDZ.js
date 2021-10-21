
//Task;
function CheckIsEven(a) {
    if (a % 2 === 0) {
       return console.log(true);;
    }else{
       return console.log(false);;
    }
 }
 
 // CheckIsEven(4);
 
 // Task 2
 let users = [
    {
       name: 'Bob',
       age: 18
    },
    {
       name: 'Tom',
       age: 25
    },
    {
       name: 'Jhon',
       age: 15
    }
 ]
 
 function showSecretContent(users) {
    if (users.age >= 18) {
       console.log('Добро пожаловать ' + users.name);
    }else{
       console.log('Вам нет 18!');
    }
 }
 
 function isAdult(users) {
    if (users.age >= 18) {
       console.log('Вы соввершенолетний ' + users.name);
    }else{
       console.log('Вы еще мелкий');
    }
 };
 
 for (let i = 0; i < users.length; i++) {
    showSecretContent(users[i]);
    isAdult(users[i]);
 };
 
 // Task 3
 
 function polindrome(params) {
     params = params.replace(/ /g, "");
     for (let i = 0; i < params.length; i++) {
         if (params[i] !== params[params.length - 1 - i]) {
             return console.log(false);
         }
     }
     return console.log(true);;
 }
 
 polindrome('я ел мясо лося млея');
 
 // Task 4
 