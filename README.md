[![Travis build](https://img.shields.io/travis/usehotkey/fuzzing.svg?style=flat-square)](https://travis-ci.org/usehotkey/fuzzing)
[![NPM Package](https://img.shields.io/npm/v/fuzzing.svg?style=flat-square)](https://www.npmjs.com/package/fuzzing)
# Fuzzing · 🐰
It is tool to perform **fuzz testing**. Sometimes it's hard to understand if your function would crash if you pass `null` or `undefined` or any unusual value into it. To check that you're doing right you can use this package for stress testing your functions and APIs under different payloads.

# Usage
First of all you need to install package like:
```
npm i fuzzing -SD
```

To start fuzzing follow few steps:
* pick function you want to test (fuzz)
* select set of input values, which will be used as arguments passed into the function
* choose output type if you want to see `errors` or `warnings` produced after function execution

```js
import {fuzz} from 'fuzzing';

/**
 * Let's assume that you want to test your perfectly written sum function to find some bugs or unexpected behaviours 
 */
function sum(arr) {
   return arr.reduce((accumulator, item) => accumulator + item, 0);
}

const errors = fuzz(sum) // 1. pick function you want to test (fuzz)
   .numberArray()        // 2. select set of input values from: number, string, boolean, numberArray, stringArray, booleanArray, all
   .errors();            // 3. choose output type from: successes, warnings, errors, all

// print result to see what's going on
console.log(errors);

// it would give you array of executed tests
// showing your input values, test results and stack trace in case of any error
/*
Array [
  Object {
    "description": "SUCCESS: Function returned result is OK and no errors happened",
    "input": Array [
      2.718281828459045,
      3.141592653589793,
      0.6931471805599453,
      2.302585092994046,
      1.4426950408889634,
      0.4342944819032518,
      0.7071067811865476,
      1.4142135623730951,
    ],
    "result": 12.853916621954687,
    "type": "success",
  },
  Object {
    "description": "WARNING: Function returned result might be nullable or dangerous in some way",
    "input": Array [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      13,
    ],
    "result": NaN,
    "type": "warning",
  },
  Object {
    "description": "WARNING: Function returned result might be nullable or dangerous in some way",
    "input": Array [
      0,
      1,
      -1,
      5e-324,
      1.7976931348623157e+308,
      NaN,
      -Infinity,
      Infinity,
    ],
    "result": NaN,
    "type": "warning",
  },
  Object {
    "description": "FAILED: Function execution failed, check error stack trace",
    "error": [TypeError: Cannot read property 'length' of undefined],
    "input": undefined,
    "type": "error",
  },
  Object {
    "description": "FAILED: Function execution failed, check error stack trace",
    "error": [TypeError: Cannot read property 'length' of null],
    "input": null,
    "type": "error",
  },
]
*/
```

# Testing API's

The same way you can use **fuzzing** to call API endpoint with different payloads to test the behavior of your web server.

```js
import {fuzz} from 'fuzzing';

/**
 * For example you want to ping github
 */
function pingGithub(url) {
    return fetch('https://github.io/' + url, { mode: 'no-cors' });
}

const errors = await fuzz(pingGithub)
   .string()
   .errors();

console.log(errors);

// OR

fuzz(pingGithub)
   .string()
   .errors()
   .then(console.log);
```

# Sets of input parameters

Available sets of parameters:

* `boolean` - Boolean
* `number` - Number
* `string` - String
* `object` - Object **NEW**
* `booleanArray` - Array of a booleans
* `numberArray` - Array of a numbers
* `stringArray` - Array of strings
* `objectArray` - Array of objects **NEW**
* `all` - All the data sets

# Types of output

Available types of output are available as array of result items:

* `successes` - for passed tests
* `warnings` - for tests resulted with tricky or danger returned value
* `errors` - for failed tests
* `all` - for all tests

# Contribution
Feel free to give valuable feedback ❤️ Igor Golopolosov
