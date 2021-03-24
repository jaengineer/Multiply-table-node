
const fs = require('fs');
const colors = require('colors');

const createFile = async( base = 5, list = false, to = 9 ) => {

    try {
    
        let output, consola = '';
    
        for (let i = 0; i <= to; i++) {
    
            output += `${ base } x  ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green} ${ i } ${ '='.green} ${ base * i }\n`;

        
        }
    

        if( list ) {
         console.log('=============================='.green);
         console.log('Tabla del:. '.green, colors.blue(base) );
         console.log('=============================='.green);
         console.log( consola );
        }
    
    
        fs.writeFileSync( `./outputs/table-${ base}.txt`, output);

        return `table-${ base}.txt`;
        
    } catch (error) {
        throw error;
    }

}

module.exports = {
     createFile
}