var azrael = (function (exports) {
  'use strict';

  let throttle = () => {
    console.log("throttle");
  };

  let fmtDate = () => {
    console.log("fmtDate");
  };

  let repair0 = () => {
    console.log("repair0");
  };

  let trim = () => {
    console.log("trim");
  };

  exports.fmtDate = fmtDate;
  exports.repair0 = repair0;
  exports.throttle = throttle;
  exports.trim = trim;

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  return exports;

}({}));