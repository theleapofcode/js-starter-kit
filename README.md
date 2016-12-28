# js-starter-kit
Starter kit for JS project

## Editor
[VSCode](https://code.visualstudio.com/) is my choice because of the following features,
  1. Best JS code hinting features using intellisense.
  2. Supports rich set of plugins for almost anything.
  3. Built in terminal
  4. Built in Git UI
  5. Debugger

### EditorConfig
To maintain consistency of Editor configurations, use [EditorConfig](http://editorconfig.org/). Install [EditorConfig extension for VSCode](https://marketplace.visualstudio.com/items?itemName=EditorConfigTeam.EditorConfig). Add .editorconfig file at the project root.

## Package Manager
[NPM](https://www.npmjs.com/) is the preferred manager for JS. It's not only for Node packages but also for front end packages.

### Node Security Platform
[NSP](https://nodesecurity.io/) can be used to check for security vulnerabilities in npm packages.

## Development Server
[Express](http://expressjs.com/) is a good choice for a dev server since it is highly configurable and easy to use.

### Sharing Development Server
[LocalTunnel](https://localtunnel.github.io/www/) can be used to share a development server over internet.

## Build Automation
[NPM Scripts](https://www.npmjs.com/) is the easiest option for automating build tasks. No need of Grunt or Gulp.

## Transpiling
[Babel](https://babeljs.io/) is the best ES transpiler. Add .babelrc to configue babel transpiling options.

## Bundling
[Webpack](https://webpack.github.io/) is the most versatile and configurable bundler.

## Linting
[ESLint](http://eslint.org/) is the most versatile and configurable linter.

## HTTP Client
[Fetch](https://github.com/github/fetch) is the new standard for HTTP/AJAX calls. Use a [polyfill](https://qa.polyfill.io/v2/docs/) to support all browsers.

### Mocking HTTP Server
To mock HTTP server for testing, use [JSON-server](https://github.com/typicode/json-server) and [JSON-schema-faker](https://github.com/json-schema-faker/json-schema-faker).

## Production Build

### Minification
Webpack uglify plugin to minify JS. Webpack HTML plugin to minify and bundle HTML.

### Bundle Splitting
Webpack used to split vendor and application JS bundles so that they can be cached separately.

### Cache Busting
Webpack used to add hash to filenames to bust cache.

