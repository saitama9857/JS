module.exports ={
    includes(arr, value){
        if (arr.includes(value)) {
            return console.log(true);
        }
        return console.log(false);
    },

    reverse(arr){
        let temp = []
        let neww = []
        for (let i = arr.length - 1; i >= 0;  i--) {
            temp += arr[i]
            neww = temp.split('')
        }
        return console.log(neww);
    }
}