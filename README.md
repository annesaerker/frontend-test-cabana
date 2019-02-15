## Pug-Sass-Bootstrap-Gulp test project

This is a front-end test project for Cabana, using Pug, Sass, Bootstrap and Gulp.

## Packages
- Browser Sync[browser-sync](https://github.com/browsersync/browser-sync) to launch a local server and do live reloads as sass and pug files changes
- Gulp Pug [gulp-pug](https://github.com/jamen/gulp-pug) to compile pug files.
- Gulp Data [gulp-data](https://github.com/colynb/gulp-data) to pass data to pug. this project uses JSON as the data source, however you can generate data objects from a variety of sources: json, front-matter, database, etc... see gulp-data [README](https://github.com/colynb/gulp-data)
- Gulp Sass [gulp-sass](https://github.com/dlmanning/gulp-sass) to compile sass files.
- Gulp Autoprefixer [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) to add vendor prefixes to css files

### To run
- Run `gulp` to run all tasks, watch for changes & to launch browser sync on local server.

## Stack
- Pug HTML-templates [pugjs.org](https://pugjs.org), info: [Getting started with Pug](https://codeburst.io/getting-started-with-pug-template-engine-e49cfa291e33)
- JavaScript 
- Sass [sass-lang.com](https://sass-lang.com/)
- CSS BEM-syntax or similar "modular" containment system
- Gulp [gulpjs.com](https://gulpjs.com/)

## Folders
|--build (production-ready files for deployment, only present after running 'yarn build')
|--node_modules (npm packages, project dependencies)
|--public (dev-server root, static assets, images, etc)
|--src (all files that need processing by Gulp)
    |--data (for self-contained, reusable components)
    |--layouts (keep constants in dedicated files so you can import them from anywhere)
    |--partials (mock json-data for use in pug-templates and/or JavaScript-files)
    |--js (global styles that need cascading throughout the site)
    |--sass (global Pug HTML-layouts that your views can extend from, mixin-functions for easy re-use of html-snippets)