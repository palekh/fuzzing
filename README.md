[![Travis build](https://img.shields.io/travis/usehotkey/fuzzing.svg?style=flat-square)](https://travis-ci.org/usehotkey/fuzzing)
[![NPM Package](https://img.shields.io/npm/v/fuzzing.svg?style=flat-square)](https://www.npmjs.com/package/fuzzing)
# Fuzzing · 🐰
Fuzzing is tool set for **fuzz testing**. Useful for a stress testing your functions under different inputs.

# Usage
Install package:
```
npm i fuzzing -SD
```

To start fuzzing take three steps:
* pick function you want to test (fuzz)
* select set of input values
* choose how you will receive a result back

```js
import {fuzz} from 'fuzzing';

function sum(arr) {
   return arr.reduce((accumulator, item) => accumulator + item, 0);
}

const errors = fuzz(sum) // 1. pick function you want to test (fuzz)
   .string()             // 2. select set of input values from: number, string, boolean, numberArray, stringArray, booleanArray, all
   .errors();            // 3. choose output type from: successes, warnings, errors, all

console.log(errors);
/*
 [
    {
       description: 'Function execution failed.',
       error: ..., // stack trace
       input: undefined,
       type: 'error'
    },
    ...
 ]

*/
```

# Sets of input parameters

Sets of parameters:

* `number` - Number
* `string` - String
* `boolean` - Boolean
* `numberArray` - Array of a numbers
* `stringArray` - Array of strings
* `booleanArray` - Array of a booleans

* `all` - All the data sets

# Contribution
Feel free to give valueable feedback ❤️. Igor Golopolosov
