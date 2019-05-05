// miki taskrunner 2019/5/4
// gulp => 4.0.0

// srcフォルダ
// ・imagemin (圧縮したい画像ファイル) => imgファイルへ
// ・sass (コンパイルするscssファイル) => cssファイルへ

// minフォルダ
// ・js (圧縮されたjsファイル)
// ・css (圧縮されたcssファイル)

// gulp v4からは、taskにコールバックを渡さないとエラーが出てしまう

// gulp
var gulp = require('gulp');

//
// sassのコンパイル
// 

// Sass
var sass = require('gulp-sass');
// ベンダープレフィックス
var autoprefixer = require("gulp-autoprefixer");
// watch中エラー防止
var plumber = require('gulp-plumber');
// エラーを通知する
var notify = require("gulp-notify");
// ソースマップ
var sourcemaps = require("gulp-sourcemaps");
// 親scssファイルもコンパイル
var progeny = require("gulp-progeny");
// CSSメディアクエリーを整理
var gcmq = require('gulp-group-css-media-queries');

gulp.task('sass',function(done){
  gulp.src('./src/sass/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(progeny())
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle:'expanded'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 version', 'iOS >= 8.1', 'Android >= 4.4']
    }))
    .pipe(gcmq())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/'))
  done();
})

//
// 画像の圧縮
// 

// 外部からダウンロードしてきたファイルは圧縮できなかった

// 書き出し先のファイルと比較し、変更がある場合のみ処理
var changed = require('gulp-changed');
// 画像圧縮
var imagemin = require('gulp-imagemin');
// jpgファイル
var imageminJpg = require('imagemin-jpeg-recompress');
// pngファイル
var imageminPng = require('imagemin-pngquant');
// gifファイル
var imageminGif = require('imagemin-gifsicle');
// svgファイル
var svgmin = require('gulp-svgmin');

gulp.task('imagemin', function (done) {
  // jpeg,png,gif
  gulp.src('./src/imagemin/*.+(jpg|jpeg|png|gif)')
    .pipe(changed('./imagemin'))
    .pipe(imagemin([
      imageminPng(),
      imageminJpg(),
      imageminGif({
        interlaced: false,
        optimizationLevel: 3,
        colors: 180
      })
    ]))
    .pipe(gulp.dest('./img/'));
  // svg
  gulp.src('./src/imagemin/*.+(svg)')
    .pipe(changed('./imagemin'))
    .pipe(svgmin())
    .pipe(gulp.dest('./img/'));
  done();
});


//
// jsファイルの結合
//

// jsファイル結合
var concat = require('gulp-concat');

gulp.task('concat', function (done) {
  gulp.src(['./src/concat/var.js', './src/concat/base.js','./src/concat/*.js'])
    .pipe(plumber())
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./js/'));
  done();
});


//
// オートリロード
//

// 自動的にリロード
var browserSync = require('browser-sync');

gulp.task('sync', function (done) {
  browserSync({
    // server だとphp動かない
    // server: {
    //   baseDir: "./",
    //   // ここ変更
    //   index: "index.php"
    // }

    proxy: "localhost/Git/portfolio"
  });
  done();

  done();
});
gulp.task('bs-reload', function (done) {
  browserSync.reload();
  done();
});


//
// ファイル監視
//

// gulp -v4からは、タスク実行する時に同期処理か非同期処理か明記しないといけない


gulp.task('watch',  function (done) {
  gulp.watch("./**/*.html", gulp.series('bs-reload'));
  gulp.watch("./**/*.php", gulp.series('bs-reload'));
  gulp.watch("./src/sass/**/*.scss", gulp.series('sass', 'bs-reload'));
  gulp.watch("./src/imagemin/*", gulp.series('imagemin', 'bs-reload'));
  gulp.watch("./src/concat/*.js", gulp.series('concat', 'bs-reload'))
  done();
});

// gulp を実行で、browserSync立ち上げ + watch実行
gulp.task('default', gulp.series('sass','imagemin','concat','sync','watch') );


//
// ファイル圧縮
//

// JSファイル圧縮
var uglify = require('gulp-uglify');
// CSSファイル圧縮
var cleanCSS = require('gulp-clean-css');
// ファイル名変更
var rename = require('gulp-rename');

gulp.task("jsmin", function (done) {
  gulp.src('./js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest('./min/js'));
  done();
});

gulp.task('cssmin', function (done) {
  gulp.src("./css/*.css")
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest('./min/css/'));
  done();
});


//
// ES6からES5にコンパイル
//

var babel = require('gulp-babel');

gulp.task('babel', function (done) {
  gulp.src('./js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./babel/'));
  done();
});