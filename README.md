# tiny-throttle 🚗

A 311 byte (gziped) throttle & debounce package that is designed to replace lodash's `_.debounce()` & `_.throttle()`

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
import $ from 'jquery'

// on click, run a function
// then wait 500 miliseconds from last click to run again on next click
$('button').on('click', debounce(doSomethingWithNetwork, 500, true))

// on click, wait 500 milliseconds after last click then run a function
$('button').on('click', debounce(doSomethingToTeachUsersToWait, 500))

// on click, run a function, then make sure it doesn't get run more than once
// every 500 miliseconds
$('button').on('click', throttle(doSomethingWithNetwork, 500))

```

## License

MIT
