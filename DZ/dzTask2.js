let notepad1 = {
    name: 'Aser',
    canModify: true,
    price: 26000,
    graphicsСard: 3, // от 1 до 10
    cpu: 2, // от 1 до 10
  }
  
let  notepad2 = {
    name: 'MacBook',
    canModify: false,
    price: 100000,
    graphicsСard: 9, // от 1 до 10
    cpu: 5, // от 1 до 10
  }
let notepad3 = {
    name: 'HP',
    canModify: true,
    price: 40000,
    graphicsСard: 7, // от 1 до 10
    cpu: 4, // от 1 до 10
  }





let arr = [notepad1, notepad2, notepad3];

for(let i = 0; i < arr.length; i++){
    if(arr[i].canModify ){
        arr[i].ssd = 10;
    }
    
    if (arr[i].cpu >= 5 && arr[i].graphicsСard >= 5){
       arr[i].price += 1200;
    } 
    
    else if (arr[i].cpu >= 5 || arr[i].graphicsСard >=5){
        arr[i].price += 500;
    }

}

let most = arr[0].price
for (let i = 0; i < arr.length; i++) {
    if (arr[i].price > most ){
         most = arr[i].price
         arr[i].flagship = true;
    }
}


console.log(arr)