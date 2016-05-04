var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
    less = require('gulp-less'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    concat  = require('gulp-concat'),
    svgSprite = require('gulp-svg-sprites');
	spritesmith = require('gulp.spritesmith');

//less文件编译合并
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

//制作雪碧图及生成对应css文件
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

//制作svg雪碧图
gulp.task('svg-sprites', function() {
    return gulp.src('./assets/images/svg/*.svg')
            .pipe(svgSprite())
            .pipe(rename({ suffix: '.svg' }))
            .pipe(gulp.dest('./assets'))
})

//监控less
gulp.task('watch', function() {
    gulp.watch('./assets/less/*.*', ['css'])
})
