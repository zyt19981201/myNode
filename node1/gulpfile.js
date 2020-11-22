// 1.引用gulp模块
const gulp = require('gulp')

// 使用gulp.task建立任务
gulp.task('first', done => {
    console.log('人生中的第一个gulp任务执行');
    // 使用gulp.src获取要处理的文件
    gulp.src('./src/style/base.css')
        .pipe(gulp.dest('./dist/css'))
    done()
})

// 1.html任务
// html文件代码的压缩工作
// 抽取html文件中的公共代码

// 1.引用
const htmlmin = require('gulp-htmlmin')
// 抽取公共部分html代码引用
const fileinclude = require('gulp-file-include')


// 2.编写任务
gulp.task('htmlmin', done => {
    gulp.src('./src/*.html')
        .pipe(fileinclude())
        // 压缩代码
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('./dist'))
    done()
})


// css任务
// less语法的转换
// css代码的压缩

// 引用
const less = require('gulp-less')
// 压缩引用
const csso = require('gulp-csso')
gulp.task('cssmin', done => {
    gulp.src(['./src/style/*.less', './src/style/*.css'])
        .pipe(less())
        .pipe(csso())
        .pipe(gulp.dest('./dist/less'))
    done()

})

// js任务
// es6代码转换
// 代码压缩

// 引用
const babel = require('gulp-babel');

// 丑化
const uglify = require('gulp-uglify');
gulp.task('jsmin', done => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
    done()
})


// 复制文件夹
gulp.task('copy', done => {
    gulp.src('./src/images/*')
        .pipe(gulp.dest('./dist/images'))
    done()
})


// 构建任务
gulp.task('default', gulp.series(['htmlmin', 'copy', 'jsmin', 'cssmin', 'first'], done => {
    done()
}))