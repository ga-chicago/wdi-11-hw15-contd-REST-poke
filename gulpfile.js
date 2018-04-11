const gulp = require('gulp');
const less = require('gulp-less');

///gulp is a task runner
gulp.task('watch', () => {
	///this is watching for any file with the estension of less
	gulp.watch(['./public/less/**/*.less'], ['less']);
});





gulp.task('less', () => {
	//find file we want to convert
	///converted
	//send it to where we want
	gulp.src('./public/less/style.less')///give it the file path
		.pipe(less())
		.pipe(gulp.dest('./public/css/'));
})