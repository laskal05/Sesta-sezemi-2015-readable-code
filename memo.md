## 工夫1

### 実際のコード

https://github.com/Sesta/Sesta-sezemi-2015-readable-code/blob/c9ca0d02700280823606842801d57027f3efaaec/recipe.js#L1

```javascript
console.log( "オムライス" );
```


### どうしてリーダブルだと思っているかの説明

関数に渡す引数が目立つように、()の中にスペースを入れている


### この書き方の一言説明

引数を目立たせる




## 工夫2
### 実際のコード

https://github.com/Sesta/Sesta-sezemi-2015-readable-code/blob/84be55d56e31d9054a22190a111add81cb64bc39/recipe.js

```javascript
var filePath = 'recipe-data.txt';
```


### どうしてリーダブルだと思っているかの説明

変数名を使って、変数の内容を説明しているため
中身が何がわかりやすい


### この書き方の一言説明

変数名による説明




## 工夫3
### 実際のコード

https://github.com/Sesta/Sesta-sezemi-2015-readable-code/blob/84be55d56e31d9054a22190a111add81cb64bc39/recipe.js

```javascript
function showRecipe( file_path )
```


### どうしてリーダブルだと思っているかの説明

機能ごとに関数を作ることで
ブロック毎に何をしているかわかりやすい


### この書き方の一言説明

機能の分割


noopy05 wrote:

## 工夫1
### 実際のコード
https://github.com/noopy05/Sesta-sezemi-2015-readable-code/blob/master/recipe3.js

function readRecipeFromFile( path )
function outputRecipe( data )

### どうしてリーダブルだと思っているかの説明
今回は処理フェーズを除き，わかりやすくするために，機能を大きく以下の二つに分けた
* ファイルからの読み込み
* 出力

### この書き方の一言説明

機能の分割

## 工夫2
### 実際のコード
https://github.com/noopy05/Sesta-sezemi-2015-readable-code/blob/master/recipe3.js

function readRecipeFromFile( path )

### どうしてリーダブルだと思っているかの説明
引数名のpathをファイルのパスだとわかるように，関数名にFromFileと入れた

### この書き方の一言説明

機能の分割

## 工夫3
### 実際のコード
https://github.com/noopy05/Sesta-sezemi-2015-readable-code/blob/master/recipe3.js

/* ライブラリの読み込み */

### どうしてリーダブルだと思っているかの説明
ライブラリの読み込みを上部にまとめることで，わかりやすく

### この書き方の一言説明
見やすさの向上




