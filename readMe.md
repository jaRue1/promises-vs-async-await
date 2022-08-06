# Promises Vs Async Await

What is a promise?

A Promise is a proxy for a value not necessarily known when the promise is created.

The promise object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

A Promise is in one of these states:

- pending: initial state, neither fulfilled nor rejected.

- fulfilled: meaning that the operation was completed successfully.

- rejected: meaning that the operation failed.

### Useful Links

[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise "MDN Docs")

[Basics](https://javascript.info/promise-basics "Basics")

[W3 Schools](https://www.w3schools.com/js/js_promise.asp "W3 Schools")

What is `aysnc` `await` ?

The `async` and `await` keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains.

`Async` functions can contain **zero** or **more** `await` expressions.

The resolved value of the promise is treated as the return value of the `await` expression.

Use of `async` and `await` enables the use of ordinary try / catch blocks around asynchronous code.

### Useful Links

[Aysnc Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function "MDN Docs")

[Basics](https://javascript.info/async-await "Basics")

[W3 Schools](https://www.w3schools.com/js/js_async.asp "W3 Schools")
