/*
 * @Description:
 * @Author: mhyu
 * @Date: 2020-01-13 13:18:08
 * @LastEditors: mhyu
 * @LastEditTime: 2020-07-03 17:40:21
 */
//文件路径处理
var path = require('path');
var gulp = require('gulp');
// 按顺序逐个同步地运行任务
var gulpSequence = require('gulp-sequence');
// 编译sass
var sass = require('gulp-sass');
// 压缩css文件
var cleanCSS = require('gulp-clean-css');
// 批量为css文件扩展命名空间
var cssWrap = require('gulp-css-wrap');
var del = require('del');



// 蓝色部分 start
var BcustomThemeName = '.custom-theme-blue';
// gulp 删除文件
gulp.task('BdelVar',function(){
  return del([
    './src/content/style/var.scss'
  ])
})
// gulp 将蓝色变量文件移动到指定目录
gulp.task('BcopyBtoC',function(){
  return gulp.src('./src/content/style/variable_b/var.scss')
  .pipe(gulp.dest('./src/content/style'))
})
//生成css文件
gulp.task('BsassStyles', function() {
  return gulp
    .src('./src/content/style/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/content/custom-theme/custom-theme-blue/common'));
});
// css文件默认加上 前缀名
gulp.task('BcssStyles', function() {
  return gulp
    .src(path.resolve('./src/content/custom-theme/custom-theme-blue/common/index.css'))
    .pipe(cssWrap({ selector: BcustomThemeName }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./src/content/custom-theme/custom-theme-blue/common'));
});
gulp.task('blueCss',gulp.series('BdelVar','BcopyBtoC','BsassStyles','BcssStyles'),function(){});

// 蓝色部分 end

// 绿色部分 start
var GcustomThemeName = '.custom-theme-green';
// gulp 删除文件
gulp.task('GdelVar',function(){
  return del([
    './src/content/style/var.scss'
  ])
})
// gulp 将蓝色变量文件移动到指定目录
gulp.task('GcopyGtoC',function(){
  return gulp.src('./src/content/style/variable_g/var.scss')
  .pipe(gulp.dest('./src/content/style'))
})
//生成css文件
gulp.task('GsassStyles', function() {
  return gulp
    .src('./src/content/style/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/content/custom-theme/custom-theme-green/common'));
});
// css文件默认加上 前缀名
gulp.task('GcssStyles', function() {
  return gulp
    .src(path.resolve('./src/content/custom-theme/custom-theme-green/common/index.css'))
    .pipe(cssWrap({ selector: GcustomThemeName }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./src/content/custom-theme/custom-theme-green/common'));
});
gulp.task('greenCss',gulp.series('GdelVar','GcopyGtoC','GsassStyles','GcssStyles'),function(){});

// 绿色部分 end


