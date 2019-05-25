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
   .string()             // 2. select set of input values from: number, string, boolean, numberArray, stringArray, booleanArray, all
   .errors();            // 3. choose output type from: successes, warnings, errors, all

console.log(errors); // print result if needed to see what's going on
// it would give you array of executed tests showing you input value / test result and stack trace in case of any error
/*
 Array [
  Object {
    "description": "Normal result.",
    "input": "",
    "result": 0,
    "type": "success",
  },
  Object {
    "description": "Normal result.",
    "input": "0",
    "result": "00",
    "type": "success",
  },
  Object {
    "description": "Normal result.",
    "input": "1",
    "result": "01",
    "type": "success",
  },
  Object {
    "description": "Normal result.",
    "input": "1234567890",
    "result": "01234567890",
    "type": "success",
  },
  Object {
    "description": "Danger result: 0UPPER_CASE. Check function implementation",
    "input": "UPPER_CASE",
    "result": "0UPPER_CASE",
    "type": "warning",
  },
  Object {
    "description": "Danger result: 0lower_case. Check function implementation",
    "input": "lower_case",
    "result": "0lower_case",
    "type": "warning",
  },
  Object {
    "description": "Danger result: 0CamelCase. Check function implementation",
    "input": "CamelCase",
    "result": "0CamelCase",
    "type": "warning",
  },
  Object {
    "description": "Danger result: 0!@#$%^&*()_+-=\`~[]\\\\{}|;':,./<>?. Check function implementation",
    "input": "!@#$%^&*()_+-=\`~[]\\\\{}|;':,./<>?",
    "result": "0!@#$%^&*()_+-=\`~[]\\\\{}|;':,./<>?",
    "type": "warning",
  },
  Object {
    "description": "Danger result: 0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa. Check function implementation",
    "input": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "result": "0aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "type": "warning",
  },
  Object {
    "description": "Function execution failed.",
    "error": [TypeError: Cannot read property 'length' of undefined],
    "input": undefined,
    "type": "error",
  },
  Object {
    "description": "Function execution failed.",
    "error": [TypeError: Cannot read property 'length' of null],
    "input": null,
    "type": "error",
  },
]
*/
```

# Sets of input parameters

Available sets of parameters:

* `number` - Number
* `string` - String
* `boolean` - Boolean
* `numberArray` - Array of a numbers
* `stringArray` - Array of strings
* `booleanArray` - Array of a booleans
* `all` - All the data sets

# Types of output

Available types of output are available as array of result items:

* `successes` - for passed tests
* `errors` - for failed tests
* `warnings` - for tests resulted with tricky or danger returned value
* `all` - for all tests

# Contribution
Feel free to give valueable feedback ❤️. Igor Golopolosov
