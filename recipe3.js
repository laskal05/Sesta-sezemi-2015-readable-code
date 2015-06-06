/* ライブラリの読み込み */
var fileSystemModule = require( 'fs' );

var filePath = 'recipe-data.txt';

/* ここから処理 */
var recipeData = readRecipeFromFile( filePath );
outputRecipe( recipeData );

function readRecipeFromFile( path ){
  var fileContents = fileSystemModule.readFileSync( path, 'utf8' ) 
  return fileContents;
}
function outputRecipe( data ) {
  /* 注意:無駄な行(何も書かれていない行)も出力される */
  console.log(data);
}
