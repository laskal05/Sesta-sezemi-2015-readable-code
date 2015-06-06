var filePath = 'recipe-data.txt';

showRecipe( filePath );

function showRecipe( file_path ){
  var fileSystemModule = require( 'fs' );

  fileSystemModule.readFile( file_path, 'utf8', function ( error, fileContents ) {
    console.log( fileContents );
  });
}
