const gulp = require("gulp"),
  pug = require("gulp-pug"),
  sourcemaps = require("gulp-sourcemaps"),
  sass = require("gulp-sass"),
  autoprefixer = require("gulp-autoprefixer"),
  webpack = require("webpack"),
  webpackStream = require("webpack-stream"),
  webpackConfig = require("./webpack.config.js"),
  imagemin = require("gulp-imagemin"),
  svgstore = require("gulp-svgstore"),
  clean = require("gulp-clean"),
  browserSync = require("browser-sync").create();

gulp.task("pug", () => {
  return gulp
    .src("src/*.pug")
    .pipe(pug())
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("style", () => {
  return gulp
    .src("./src/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
        includePaths: require("node-normalize-scss").includePaths
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer(["last 2 versions", "> 1%"], {
        cascade: true
      })
    )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist/source/style/"))
    .pipe(browserSync.stream());
});

gulp.task("script", () => {
  return gulp
    .src("./src/source/js/script.js")
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest("./dist/source/js/"))
    .pipe(browserSync.stream());
});

gulp.task('img', () => {
  return gulp
    .src("./src/source/img/**/*", "!./src/source/img/sprite/")
    .pipe(
      imagemin({
        verbose: true
      })
    )
    .pipe(gulp.dest("./dist/source/img/"))
    .pipe(browserSync.stream());
})

gulp.task('svg', () => {
  return gulp
    .src("./src/source/img/sprite/*.svg")
    .pipe(svgstore())
    .pipe(gulp.dest("./dist/source/img/"))
    .pipe(browserSync.stream());
})

gulp.task("clear", () => {
  return gulp.src("./dist/", { read: false }).pipe(clean());
});

gulp.task("browser-sync", () => {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});

gulp.task('watch', () => {
  gulp.watch("./src/**/*.scss", gulp.series("style"));
  gulp.watch("./src/**/*.pug", gulp.series("pug"));
  gulp.watch("./src/**/*.js", gulp.series("script"));
  gulp.watch("./src/**/*.svg", gulp.series("svg"));
  gulp.watch(["./src/**/*.png", "src/**/*.jpg"], gulp.series("img"));
})

gulp.task(
  "build",
  gulp.series("clear", gulp.parallel("pug", "style", "script", "img", "svg"))
);

gulp.task("default", gulp.parallel("browser-sync", "watch"));
