module.exports = {
    checkNum(temp){
        if ( temp % 2 !== 0) {
            return console.log('even');
        }else{
            return console.log('odd');
        }
    },

   renge(a,b, temp){
    temp = Math.round(Math.random( ) * (a - b) + b)
    console.log(temp);
    if (temp <= a && temp >= b) {
        return true
    }else{
        return false
    }
}
}