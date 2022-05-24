
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla multiplicar'
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Limite de la multiplicacion'

    })
    .check((argv, options) => {
        if (isNaN(argv.b || argv.h)) {
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

    module.exports = argv;