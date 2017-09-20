[![Travis build](https://img.shields.io/travis/usehotkey/fuzzing.svg?style=flat-square)](https://travis-ci.org/usehotkey/fuzzing)
[![NPM Package](https://img.shields.io/npm/v/fuzzing.svg?style=flat-square)](https://www.npmjs.com/package/fuzzing)
# Fuzzing · 🐰
Fuzzing is tool set for [fuzz testing](https://en.wikipedia.org/wiki/Fuzzing).

Useful for a stress testing your functions with a different input parameters.

# Usage
Fuzzing is [available on npm](https://www.npmjs.com/package/fuzzing).

You can install it via:
```
npm i fuzzing
```

To starts fuzzing some functions choose three things:
* function to fuzzing
* set of parameters
* type of collected result

Then you can started:

```javascript
function sum(arr) {
   return arr.reduce((accumulator, item) => accumulator + item, 0);
}

const errors = functionFuzzer(sum)
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
Detailed information about content of sets you can find in [checker folder](https://github.com/usehotkey/fuzzing/tree/master/src/checker);
You can use a following sets of parameters:

* `number` - Number
* `numberArray` - Array of a numbers
* `boolean` - Boolean
* `booleanArray` - Array of a booleans
* `stringy` - String
* `stringArray` - Array of strings

Also you can combine them with `all` operator.

```javascript
functionFuzzer(sum).all();
```

# Community
Try it now and give a feedback.

We are ready to pull requests!
