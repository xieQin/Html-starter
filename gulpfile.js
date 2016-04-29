var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat  = require('gulp-concat'),
	spritesmith = require('gulp.spritesmith');

gulp.task('css', function () {
    var cssSrc = './assets/less/*.less',
        cssDst = './assets/css';

    return gulp.src(cssSrc)
        .pipe(less())
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./assets/css'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest(cssDst))
});

gulp.task('sprites', function() {
    var data =
        gulp.src('./assets/images/icons/*.*')
            .pipe(spritesmith({
                cssName: 'sprites.css',
                imgName: '../images/sprites.png',
            }));

    data.img.pipe(gulp.dest('./assets/images/'));
    data.css.pipe(gulp.dest('./assets/css'));
})

gulp.task('watch', function() {
    gulp.watch('./assets/less/*.*', ['css'])
})
