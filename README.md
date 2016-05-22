# Views and templating

## Release 0

1. Make the test in `test/function-tests.js` pass.


## Release 1

1. Write a test in `test/function-tests.js` for a `lib/renderList` function.
2. Make it pass.


## Release 2: Server-side templating, the hard way

1. Setup an Express server in `server.js`.
2. Require both of the functions from `lib/` into your server.
3. Improve the test in `tests/server-tests.js`.
4. Using your `renderTable` function and `cheerio`to make the test in `test/server-test.js` pass.


## Release 3: Test-driven server-side templating, the hard way.

1. Write a server test for the route `GET /people?view=list`
2. Make your test pass using your `renderList` function.


## Release 4: Templating languages

1. Compare [Jade](https://www.npmjs.com/package/jade), [EJS](https://www.npmjs.com/package/ejs), and [Handlebars](https://github.com/ericf/express-handlebars) templating solutions. Choose one that you and your pair would like to try.
2. Setup your Express server to use one of these as its view engine.
3. Remove your `cheerio`, `render-table` and `render-list` code in `server/server.js`
4. Write some views in `views/` in your chosen template language and make your existing tests pass.

