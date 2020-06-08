var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpSass = require('gulp-sass');
var reload = browserSync.reload;
const { parallel, series, dest, src } = require('gulp');
var htmlmin = require('gulp-htmlmin');

// scss编译后的css将注入到浏览器里实现更新
// gulp.task('sass', function () {
//     return gulp.src("app/scss/*.scss")
//         .pipe(sass())
//         .pipe(gulp.dest("app/css"))
//         .pipe(reload({ stream: true }));
// });

function sass() {
    // body omitted
    return src("src/css/*.scss")
        .pipe(gulpSass())
        .pipe(dest("lib/css"))
        .pipe(reload({ stream: true }));
}


// 静态服务器 + 监听 scss/html 文件
gulp.task('serve', series(sass, function () {
    browserSync.init({
        server: "./",
        //监听html文件修改
        files: ["dist/*.html"]
    });
    //编译sass
    gulp.watch("src/css/*.scss", sass);
    
    //gulp.watch("dist/*.html").on('change', browserSync.stream);
}));



exports.sass = sass;
exports.default = series(sass)