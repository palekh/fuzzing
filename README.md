[![Travis build](https://img.shields.io/travis/usehotkey/fuzzing.svg?style=flat-square)](https://travis-ci.org/usehotkey/fuzzing)
[![NPM Package](https://img.shields.io/npm/v/fuzzing.svg?style=flat-square)](https://www.npmjs.com/package/fuzzing)
# Fuzzing · 🐰
Fuzzing is tool set for [fuzz testing](https://en.wikipedia.org/wiki/Fuzzing).

Useful for a stress testing your functions with a different input parameters.

# Usage
Fuzzing is [available on npm](https://www.npmjs.com/package/fuzzing).

Install project via:
```
npm i fuzzing
```

To start do fuzzing take three steps:
* pick function you want to fuzz
* select set of parameters
* choose how you will receive a result back

Example:

```js
import {fuzz} from 'fuzzing';

function sum(arr) {
   return arr.reduce((accumulator, item) => accumulator + item, 0);
}

const errors = fuzz(sum)
   .string()
   .errors();

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
You can find detailed information set variants here [checker folder](https://github.com/usehotkey/fuzzing/tree/master/src/checker);

Sets of parameters:

* `number` - Number
* `numberArray` - Array of a numbers
* `boolean` - Boolean
* `booleanArray` - Array of a booleans
* `stringy` - String
* `stringArray` - Array of strings

* `all` - All the data sets

# Contribution
Feel free to give a feedback.

We accept pull requests!
