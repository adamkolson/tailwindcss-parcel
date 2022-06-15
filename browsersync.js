 const browserSync = require("browser-sync");

 browserSync({
   server: "dist",
   open: false,
   files: [
     "dist/*.html",
     "src/*.html",
     "dist/*.css",
     "src/*.css",
     "dist/*js",
     "src/*.js",
   ],
 });
 