'use strict';
/**
 * 
 * gulp v4
 *  
 */

/**
 * 
 * 外部ファイル読み込み
 * 
 */
// gulp
var gulp = require( 'gulp' );
// sassの実行ファイル
var sass = require( 'gulp-sass' );
// エラー時のデスクトップ通知機能
var notify = require( 'gulp-notify' );
// エラー時の強制終了防止
var plumber = require( 'gulp-plumber' );
// ソースマップ作成
var sourcemaps = require( 'gulp-sourcemaps' );
// ベンダープレフィックス
var pleeease = require( 'gulp-pleeease' );
// es6
require( 'es6-promise' ).polyfill();

/**
 * 
 * 設定関係
 * 
 */
// 実行時の出力ファイルのパス指定
var cssSrcPath = './src/sass';
var cssDestPath = './css';
var jsSrcPath = './src/js';
var jsDestPath = './js';
// タスク名
var task = {
  sass: 'sass',
  js: 'js',
  watch: 'watch'
};

/**
 * 
 * タスク関係
 * gulp v4からtaskはコールバックを渡してやらないと実行が完了しなくなっている
 * 
 */
// sass
gulp.task( 
  task.sass,
  function(done){
    showLog('task : sass');
    gulp
      .src( cssSrcPath + '/*.scss' )
      // ファイル内のエラー検索
      .pipe(
        plumber(
          {
            errorHandler: notify.onError( 'Error: <%= error.message %>' )
          }
        )
      )
      // ファイルの圧縮
      .pipe(
        sass(
          {
            outputStyle: 'expanded',
            compass: true
          }
        )
        .on( 'error', sass.logError )
      )
      // ソースマップの生成
      .pipe(
        sourcemaps.write()
      )
      // ベンダープレフィックスの生成
      .pipe(
        pleeease(
          {
            autoprefixer: { 'browsers': ['last 2 versions'] },
            minifier: false
          }
        )
      )
      // sassファイルの書き出し
      .pipe( gulp.dest( cssDestPath ) );
  done();
  }
);


//
// JavaScriptファイルのtaskを設定
//
gulp.task(
  task.js,
  function(done){
    showLog( 'task : js' );
    gulp
      .src( jsSrcPath + '/*.js' )
      .pipe( gulp . dest( jsDestPath ) );
    done();
});


//
// sassファイルのwatchを設定
//
gulp.task(
  task.watch,
  function(){
    showLog( 'task : watch' );
    var target = [
      cssSrcPath + '/*.scss',
      jsSrcPath + '/*.js'
    ];
    
    gulp.watch(
      target,
      gulp.parallel(task.sass)
    );
  }
);


// gulpタスクの実行
gulp.task(
  'default',
  gulp.series( gulp.parallel( task.sass, task.js ))
);



// コンソール関数
function showLog( message ) {
  console.log( '# ----------------------------------- #' );
  console.log( `#    ${message}` );
  console.log( '# ----------------------------------- #' );
  
}