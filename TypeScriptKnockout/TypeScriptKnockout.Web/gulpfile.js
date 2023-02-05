/// <binding AfterBuild='default' Clean='clean' />
/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/
var gulp = require("gulp");
var del = require("del");
var paths = {
    scripts: ["scripts/**/*.js", "scripts/**/*.map", "models/**/*.js", "components/**/*.js"],
    markup: ["components/**/*.html"]
};
gulp.task("clean", function (done) {
    del(["wwwroot/scripts/**/*"]);
    del(["wwwroot/views/**/*"])
    done();
});
gulp.task("default", function (done) {
    gulp.src(paths.scripts).pipe(gulp.dest("wwwroot/scripts"));
    gulp.src(paths.markup).pipe(gulp.dest("wwwroot/views"));
    done();
});