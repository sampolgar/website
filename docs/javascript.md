# Resources

- https://exploringjs.com/es6/ch_modules.html
- https://github.com/mdn/js-examples/tree/master/module-examples


### es6 import export
```js
//------ lib.js ------
export const sqrt = Math.sqrt; //rather than module.exports { sqrt: sqrt, diag: diag }
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}
//------ main.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5
```
```js
export default function () {} // no semicolon! for single export
```
