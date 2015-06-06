var filePath = 'recipe-data.txt';

showRecipe( filePath );

function showRecipe( file_path ){
  /* fsライブラリの読み込み */
  var fileSystemModule = require( 'fs' );
  var fileContents = fileSystemModule.readFileSync( file_path, 'utf8' ) 
  /* ※一行分無駄な行が出力されているので注意 */
  console.log( fileContents );
}
