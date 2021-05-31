# tiny-throttle 🚗

[![Build Status][build-badge]][build]
[![twitter][twitter-badge]][twitter]
[![version][version-badge]][package]
[![bundlephobia][bundlephobia-badge]][bundlephobia]
[![MIT License][license-badge]][license]

A throttle & debounce package with a tiny file size.

At only **329 bytes** it is **83% smaller than lodash's `_.debounce()` & `_.throttle()`**

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

[build-badge]: https://img.shields.io/circleci/build/github/biw/tiny-throttle.svg?style=flat-square
[build]: https://app.circleci.com/pipelines/github/biw/tiny-throttle
[version-badge]: https://img.shields.io/npm/v/tiny-throttle.svg?style=flat-square
[package]: https://www.npmjs.com/package/tiny-throttle
[license-badge]: https://img.shields.io/npm/l/tiny-throttle.svg?style=flat-square
[license]: https://github.com/biw/tiny-throttle/blob/main/LICENSE
[twitter-badge]: https://img.shields.io/twitter/follow/biwills.svg?style=flat-square&logo=twitter&label=Follow
[twitter]: https://twitter.com/biwills
[bundlephobia]: https://bundlephobia.com/result?p=tiny-throttle
[bundlephobia-badge]: https://img.shields.io/bundlephobia/minzip/tiny-throttle@latest?style=flat-square
