try {[].flat()} catch(_) {
  Array.prototype.flat = function flat() {
    return this[0];
  };
}
