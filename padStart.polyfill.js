(function() {
  'use strict';
  if ('padStart' in String.prototype) return;
  String.prototype.padStart = function(len, str) {
    str = str === undefined ? '\u0020' : String(str);
    if (len <= this.length || str.length === 0) return String(this);
    var buffer = new Array(len-this.length);
    for (var i = 0; i < buffer.length; i++) buffer[i] = str[i%str.length];
    return buffer.join('').concat(this);
  };
})();
