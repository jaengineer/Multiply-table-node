const argv = require('yargs')
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    demandOption: false
                })
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b )) {
                        throw 'Base has to be a number';
                    }
                    return true;
                })
                .argv;

module.exports = argv;