const gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function() {
    const header = gulp.src("app/blocks/header/header-sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("app/blocks/header/header-css"));


    return sass(header)
});