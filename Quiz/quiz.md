## Question 1

What is the output of the code below?

A\) Error 1 </br>
B\) Success 1, Error 1 </br>
C\) Success, Success 2, Success 3, Success 4 </br>
D\) Success, Success 2, Success 3, Error 1, Success 4 </br>
E\) Error 1, Success 1, Success 2, Success 3, Success 4 </br>
F\) Error 1, Success 4 </br>

```js
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise = job();

promise

.then(function () {
  console.log('Success 1');
})

.then(function () {
  console.log('Success 2');
})

.then(function () {
  console.log('Success 3');
})

.catch(function () {
  console.log('Error 1');
})

.then(function () {
  console.log('Success 4');
});
```

## Question 2

What is the output of the code below?

A\) error, success, Error caught </br>
B\) success, success </br>
C\) success, error, success, error </br>
D\) success, error, Error caught </br>
E\) error, Error caught, success </br>
F\) error, Error caught, success, error </br>
G\) success, error, error </br>
H\) success, success, success </br>

```js
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

.then(function (data) {
  console.log(data);
  return job(false);
})

.catch(function (error) {
  console.log(error);
  return 'Error caught';
})

.then(function (data) {
  console.log(data);
  return job(true);
})

.catch(function (error) {
  console.log(error);
});
```

## Question 3

What is the output of the code below?

A\) error, error, Error caught, Error: test </br>
B\) success, success, Error caught, Success: test </br>
C\) success, Defeat, error, Error caught, Success: test </br>
D\) error, Error caught Success: test </br>
E\) success, Defeat, error, Error caught, Error: test </br>
F\) success, error, Defeat, Success: test </br>

```js
function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = job(true);

promise

.then(function (data) {
  console.log(data);
  return job(true);
})

.then(function (data) {
  if (data !== 'victory') {
    throw 'Defeat';
  }

  return job(true);
})

.then(function (data) {
  console.log(data);
})

.catch(function (error) {
  console.log(error);
  return job(false);
})

.then(function (data) {
  console.log(data);
  return job(true);
})

.catch(function (error) {
  console.log(error);
  return 'Error caught';
})

.then(function (data) {
  console.log(data);
  return new Error('test');
})

.then(function (data) {
  console.log('Success:', data.message);
})

.catch(function (data) {
  console.log('Error:', data.message);
});
```