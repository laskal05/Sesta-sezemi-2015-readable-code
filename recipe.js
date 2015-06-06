
var fileSystemModule = require( 'fs' );

fileSystemModule.readFile( 'recipe-data.txt' , 'utf8', function ( err, text ) {
    console.log( text );
});