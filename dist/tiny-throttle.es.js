var debounceLead = function (callback, offset) {
  var baseTime = 0;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var currentTime = Date.now();
    if (baseTime + offset <= currentTime) {
      callback.apply(void 0, args);
      baseTime = currentTime;
    } else {
      baseTime = currentTime;
    }
  }
};

var debounceTail = function (callback, offset) {
  var timeoutFunc = null;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    clearTimeout(timeoutFunc);
    timeoutFunc = setTimeout(function () {
      callback.apply(void 0, args);
    }, offset);
  }
};

// call the correct debounce function
var debounce = function (callback, offset, leading) {
    if ( leading === void 0 ) leading = false;

    return leading ? debounceLead(callback, offset) : debounceTail(callback, offset);
};

var throttle = function (callback, offset) {
  var baseTime = 0;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var currentTime = Date.now();
    if (baseTime + offset <= currentTime) {
      baseTime = currentTime;
      callback.apply(void 0, args);
    }
  }
};

export { debounce, throttle };
//# sourceMappingURL=tiny-throttle.es.js.map
