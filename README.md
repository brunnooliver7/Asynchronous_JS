This project was made based on [this tutorial](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/) (freeCodeCamp) made by [Joy Shaheb](https://www.freecodecamp.org/news/author/joy/) and on [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Today we're going to build and run an ice cream shop and learn asynchronous JavaScript at the same time. Along the way, you'll learn how to use:

* Callbacks
* Promises
* Async / Await

# Callback

A callback is a function passed as an argument to another function.

When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks.

# Promises

Promises were invented to solve the problem of callback hell and to better handle our tasks.

A promise has three states:

* Pending: initial state, neither fulfilled nor rejected.
* Resolved (fulfilled): meaning that the operation was completed successfully.
* Rejected: meaning that the operation failed.

# Async / Await

These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards. They make async code look more like old-school synchronous code, so they're well worth learning.

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.