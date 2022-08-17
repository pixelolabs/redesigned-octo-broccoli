"use strict";
const gulp = require("gulp");
// const babel = require("gulp-babel");
const autoprefixer = require("gulp-autoprefixer");
// const changed = require("gulp-changed");
const concat = require("gulp-concat");
// const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const uglify = require("gulp-uglify");
// const scsslint = require("gulp-scss-lint");
const sourcemaps = require("gulp-sourcemaps");
var livereload = require('gulp-livereload')
// const clean = require("gulp-clean");
// const imagemin = require("gulp-imagemin");
// const pngquant = require("imagemin-pngquant");

/**
 * Asset paths.
 */
const srcSCSS = "./web/themes/custom/dukeoeso/sass/**/*.scss";
const srcJS = "./web/themes/custom/dukeoeso/lib/*.js";
const format = {
  
  custom: {
    scripts: srcJS,
    scss: srcSCSS,
  },
};
gulp.task("sass", function () {
  return gulp
    .src(format.custom.scss)
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      autoprefixer(
        "last 2 version",
        "safari 5",
        "ie 7",
        "ie 8",
        "ie 9",
        "opera 12.1",
        "ios 6",
        "android 4"
      )
    )
    .pipe(sourcemaps.write("./"))

    .pipe(gulp.dest("./web/themes/custom/dukeoeso/css"));
});

// /**
//  * JS task
//  *
//  * Note: use npm to install libraries and add them below, like the babel-polyfill example
//  */
gulp.task("jsCustom", () => {
  return gulp
    .src(format.custom.scripts)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./web/themes/custom/dukeoeso/js"));
});

// /**
//  * Images task
//  */
// gulp.task("images", () => {
//   return (
//     gulp
//       .src("images/*")
//       // Pass in options to the task
//       .pipe(imagemin({ optimizationLevel: 5 }))
//       .pipe(
//         imagemin({
//           progressive: true,
//           svgoPlugins: [{ removeViewBox: false }],
//           use: [pngquant()],
//         })
//       )
//       // .pipe(clean())
//       .pipe(gulp.dest(assetsDir))
//   );
//   // .pipe(livereload());
// });



// gulp.task('twig', function() {
//   gulp.src('./web/themes/custom/dukeoeso/**/*.twig')
//     .pipe(twig())
//     .pipe(gulp.dest('dist'))
//     .pipe(livereload());
// });


// /**
//  * Watch task
//  */
gulp.task("watch", function () {
  gulp.watch(format.custom.scss, gulp.series("sass"));
  gulp.watch(format.custom.scripts,gulp.series("jsCustom"));
  livereload.listen();
  gulp.watch(['./web/themes/custom/dukeoeso/**/*.twig'], function (files){
    livereload.changed(files)
});
  // gulp.watch("images/*.{jpg,jpeg,png,gif,svg}", gulp.series("images"));
});
// /**
//  * Default task
//  */
gulp.task(
  "default",
  gulp.series(
    "sass",
    "jsCustom",
    // "images",
  )
);
