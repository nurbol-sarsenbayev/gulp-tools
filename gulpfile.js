const gulp 				= require('gulp'),
	  imagemin 			= require('gulp-imagemin'),
	  imageminMozjpeg 	= require('imagemin-mozjpeg'),
	  rename         	= require('gulp-rename');

gulp.task('rename', function() {
    return gulp.src(['src/**/*'])
        .pipe(rename(function(opt){
			opt.basename = opt.basename.replace('-min', '');
			return opt;
		}))
        .pipe(gulp.dest('dist'));
});	  
	  
gulp.task('imagemin', function() {
    return gulp.src(['src/**/*'])
        .pipe(imagemin([
            imageminMozjpeg({
                quality: 30
            })
        ]))
        .pipe(gulp.dest('dist'));
});