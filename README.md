# views and templating


## Release 0: 

1. Make the test in `test/function-tests.js` pass.

## Release 1:

1. Write a test in `test/function-tests.js` for a `lib/renderList` function
1. Make it pass

## Release 2: server-side templating, the hard way.

1. setup an express server in `server.js`.
1. require both of the functions from `lib/` into your server. 
1. improve the test in `tests/server-tests.js`
1. using your `renderTable` function and `cheerio`to make the test in `test/server-test.js` pass. 

## Release 3: test-driven server-side templating, the hard way.

1. write a server test for the route `GET /people?view=list`
1. make your test pass using your `renderList` function.

## Release 4: Templating languages

1. compare [jade](https://www.npmjs.com/package/jade), [ejs](https://www.npmjs.com/package/ejs), and [handlebars](https://github.com/ericf/express-handlebars) template languages and view engines. Choose one that you and your pair prefer
1. etup your express server to use one of these as its view engine
1. remove your `cheerio`, `render-table` and `render-list` code in `server/server.js`
1. write some views in `views/` in your chosen template language and make your existing tests pass.




  




