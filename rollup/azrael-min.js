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

  // example editButton => edit-button
  let kebab = (str) => {

    str = str.replace(/_/, "-");
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      if (/[A-Z]/.test(str[i])) {
        if (i > 0) {
          arr.push("-");
        }
        arr.push(str[i].toLowerCase());
      } else {
        arr.push(str[i]);
      }
    }
    return arr.join("")
  };

  exports.fmtDate = fmtDate;
  exports.kebab = kebab;
  exports.repair0 = repair0;
  exports.throttle = throttle;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
