# tiny-throttle 🚗

[![Build Status](https://badgen.net/github/checks/biw/tiny-throttle/main)](https://github.com/biw/tiny-throttle/actions/workflows/ci.yml)
[![version](https://badgen.net/npm/v/tiny-throttle)](https://www.npmjs.com/package/tiny-throttle)

A throttle & debounce package with a tiny file size.

At only **326 bytes** it is **83% smaller than lodash's `_.debounce()` & `_.throttle()`**

## Install

```bash
yarn add tiny-throttle
```

or

```bash
npm install --save tiny-throttle
```

or

```html
<script src="https://unpkg.com/tiny-throttle/dist/tiny-throttle.umd.js"></script>
```

Then you can find the library on `window.tinyThrottle`

## Usage

```js
import { debounce, throttle } from 'tiny-throttle'

// on click, run a function
// then wait 500 miliseconds from last click to run again on next click
document.getElementById('button').onclick = debounce(
  doSomethingWithNetwork,
  500,
  true,
)

// on click, wait 500 milliseconds after last click then run a function
document.getElementById('button').onclick = debounce(
  doSomethingToTeachUsersToWait,
  500,
)

// on click, run a function, then make sure it doesn't get run more than once
// every 500 miliseconds
document.getElementById('button').onclick = throttle(
  doSomethingWithNetwork,
  500,
)
```

## License

MIT © [Ben Williams](https://biwills.com)
