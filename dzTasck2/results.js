const result = require('./dzTasck2/module')

result.person.forEach(e => {
    if (e.password.length < 9) {
        return console.log('passsword is too short');
    }
});



result.person.forEach(e => {
    if (e.name.length == '' && e.surname.length == '' && e.position.length == '' ) {
        return console.log('all fields are required');
    }else if (e.name.length == '') {
        return console.log('name id important');
    }else if (e.surname.length == '') {
        return console.log('surname id important');
    }else if (e.position.length == '') {
        return console.log('position id important');
    }
});