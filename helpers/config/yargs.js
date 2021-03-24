const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Is the base of multiply table'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    default: false,
                    describe: 'Show the table in console'
                })
                .option('t', {
                    alias: 'to',
                    type: 'number',
                    default: 10,
                    describe: 'Cont to a max value'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b )) {
                        throw 'Base has to be a number';
                    }
                    if( isNaN( argv.t )) {
                        throw 'To param has to be a number';
                    }
                    return true;
                })
                .argv;

module.exports = argv;