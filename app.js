
const {  createFile } = require('./helpers/multiply');
require('colors');
const argv = require('./config/yargs');

console.clear();
console.log( argv);
console.log( 'base: yargs', argv.b );

createFile( argv.b, argv.l, argv.t )
    .then( fileName =>  console.log(`File ${ fileName.rainbow } created`))
    .catch( err => console.log( err ));

                                                                                                                                                           
