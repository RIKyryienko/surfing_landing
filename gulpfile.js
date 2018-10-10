const   gulp        = require('gulp'),
        sass        = require('gulp-sass'),
        pug         = require('gulp-pug'),
        browserSync = require('browser-sync');


gulp.task('sass', function() {
    const header_sass = gulp.src('app/blocks/header/header-sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/blocks/header/header-css'))
        .pipe(browserSync.reload({ stream: true }));

    const quote_sass = gulp.src('app/blocks/quote/quote-sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/blocks/quote/quote-css'))
        .pipe(browserSync.reload({ stream: true }));

    const footer_sass = gulp.src('app/blocks/footer/footer-sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/blocks/footer/footer-css'))
        .pipe(browserSync.reload({ stream: true }));

    const article_video_sass = gulp.src('app/blocks/article-video/article-video-sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/blocks/article-video/article-video-css'))
        .pipe(browserSync.reload({ stream: true }));

    const main_sass = gulp.src('app/sass/main.sass')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('pug', function () {

    gulp.src('app/index-pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('app/'))
        .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app/'
        },
        notify: false
    });
});

gulp.task('watch', ['browserSync', 'pug', 'sass'], function () {
    gulp.watch('app/blocks/**/*.sass', ['sass']);
    gulp.watch('app/**/*.pug', ['pug']);
});

