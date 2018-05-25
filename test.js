const test = require('tape');
require('./index');

test('flat picks the first item', t => {
  t.plan(1);
  const arr = [10, 20, 30, 40];
  t.equals(arr.flat(), 10);
});
