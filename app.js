const { fileCreate } = require('./helpers/multiplo');
const argv = require('./config/yargs')
const colors= require('colors');


console.clear();




console.log(argv);

fileCreate(argv.b, argv.l, argv.h)
    .then(names => console.log(names, 'creado'))
    .catch(err => console.log(err));



