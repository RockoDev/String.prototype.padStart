var assert = require('assert');
require('./padStart.polyfill.js');

assert.equal('abcde'.padStart(), 'abcde');
assert.equal('abcde'.padStart(null), 'abcde');
assert.equal('abcde'.padStart(function(){}), 'abcde');
assert.equal('abcde'.padStart(10.9), '     abcde');
assert.equal('abcde'.padStart(7.5), '  abcde');
assert.equal('abcde'.padStart(3.2), 'abcde');
assert.equal('abcde'.padStart(1.9), 'abcde');
assert.equal('abcde'.padStart(1.5), 'abcde');
assert.equal('abcde'.padStart(1.2), 'abcde');
assert.equal('abcde'.padStart(-1.2), 'abcde');
assert.equal('abcde'.padStart(-1.5), 'abcde');
assert.equal('abcde'.padStart(-1.9), 'abcde');

assert.equal('abcde'.padStart(10), '     abcde');
assert.equal('abcde'.padStart(9), '    abcde');
assert.equal('abcde'.padStart(8), '   abcde');
assert.equal('abcde'.padStart(7), '  abcde');
assert.equal('abcde'.padStart(6), ' abcde');
assert.equal('abcde'.padStart(5), 'abcde');
assert.equal('abcde'.padStart(4), 'abcde');
assert.equal('abcde'.padStart(3), 'abcde');
assert.equal('abcde'.padStart(2), 'abcde');
assert.equal('abcde'.padStart(1), 'abcde');
assert.equal('abcde'.padStart(0), 'abcde');
assert.equal('abcde'.padStart(-1), 'abcde');
assert.equal('abcde'.padStart(-2), 'abcde');
assert.equal('abcde'.padStart(-3), 'abcde');
assert.equal('abcde'.padStart(-4), 'abcde');
assert.equal('abcde'.padStart(-5), 'abcde');

assert.equal('abcde'.padStart(10, ''), 'abcde');
assert.equal('abcde'.padStart(9, ''), 'abcde');
assert.equal('abcde'.padStart(8, ''), 'abcde');
assert.equal('abcde'.padStart(7, ''), 'abcde');
assert.equal('abcde'.padStart(6, ''), 'abcde');
assert.equal('abcde'.padStart(5, ''), 'abcde');
assert.equal('abcde'.padStart(4, ''), 'abcde');
assert.equal('abcde'.padStart(3, ''), 'abcde');
assert.equal('abcde'.padStart(2, ''), 'abcde');
assert.equal('abcde'.padStart(1, ''), 'abcde');
assert.equal('abcde'.padStart(0, ''), 'abcde');
assert.equal('abcde'.padStart(-1, ''), 'abcde');
assert.equal('abcde'.padStart(-2, ''), 'abcde');
assert.equal('abcde'.padStart(-3, ''), 'abcde');
assert.equal('abcde'.padStart(-4, ''), 'abcde');
assert.equal('abcde'.padStart(-5, ''), 'abcde');

assert.equal('abcde'.padStart(10, '.'), '.....abcde');
assert.equal('abcde'.padStart(9, '.'), '....abcde');
assert.equal('abcde'.padStart(8, '.'), '...abcde');
assert.equal('abcde'.padStart(7, '.'), '..abcde');
assert.equal('abcde'.padStart(6, '.'), '.abcde');
assert.equal('abcde'.padStart(5, '.'), 'abcde');
assert.equal('abcde'.padStart(4, '.'), 'abcde');
assert.equal('abcde'.padStart(3, '.'), 'abcde');
assert.equal('abcde'.padStart(2, '.'), 'abcde');
assert.equal('abcde'.padStart(1, '.'), 'abcde');
assert.equal('abcde'.padStart(0, '.'), 'abcde');
assert.equal('abcde'.padStart(-1, '.'), 'abcde');
assert.equal('abcde'.padStart(-2, '.'), 'abcde');
assert.equal('abcde'.padStart(-3, '.'), 'abcde');
assert.equal('abcde'.padStart(-4, '.'), 'abcde');
assert.equal('abcde'.padStart(-5, '.'), 'abcde');

assert.equal('abcde'.padStart(10, '.-'), '.-.-.abcde');
assert.equal('abcde'.padStart(9, '.-'), '.-.-abcde');
assert.equal('abcde'.padStart(8, '.-'), '.-.abcde');
assert.equal('abcde'.padStart(7, '.-'), '.-abcde');
assert.equal('abcde'.padStart(6, '.-'), '.abcde');
assert.equal('abcde'.padStart(5, '.-'), 'abcde');
assert.equal('abcde'.padStart(4, '.-'), 'abcde');
assert.equal('abcde'.padStart(3, '.-'), 'abcde');
assert.equal('abcde'.padStart(2, '.-'), 'abcde');
assert.equal('abcde'.padStart(1, '.-'), 'abcde');
assert.equal('abcde'.padStart(0, '.-'), 'abcde');
assert.equal('abcde'.padStart(-1, '.-'), 'abcde');
assert.equal('abcde'.padStart(-2, '.-'), 'abcde');
assert.equal('abcde'.padStart(-3, '.-'), 'abcde');
assert.equal('abcde'.padStart(-4, '.-'), 'abcde');
assert.equal('abcde'.padStart(-5, '.-'), 'abcde');

assert.equal('abcde'.padStart(10, '1234567890'), '12345abcde');
assert.equal('abcde'.padStart(10, '123456789'), '12345abcde');
assert.equal('abcde'.padStart(10, '12345678'), '12345abcde');
assert.equal('abcde'.padStart(10, '1234567'), '12345abcde');
assert.equal('abcde'.padStart(10, '123456'), '12345abcde');

assert.equal('abcde'.padStart(10, '12345'), '12345abcde');
assert.equal('abcde'.padStart(9, '12345'), '1234abcde');
assert.equal('abcde'.padStart(8, '12345'), '123abcde');
assert.equal('abcde'.padStart(7, '12345'), '12abcde');
assert.equal('abcde'.padStart(6, '12345'), '1abcde');
assert.equal('abcde'.padStart(5, '12345'), 'abcde');
assert.equal('abcde'.padStart(4, '12345'), 'abcde');
assert.equal('abcde'.padStart(3, '12345'), 'abcde');
assert.equal('abcde'.padStart(2, '12345'), 'abcde');
assert.equal('abcde'.padStart(1, '12345'), 'abcde');
assert.equal('abcde'.padStart(0, '12345'), 'abcde');
assert.equal('abcde'.padStart(-1, '12345'), 'abcde');
assert.equal('abcde'.padStart(-2, '12345'), 'abcde');
assert.equal('abcde'.padStart(-3, '12345'), 'abcde');
assert.equal('abcde'.padStart(-4, '12345'), 'abcde');
assert.equal('abcde'.padStart(-5, '12345'), 'abcde');

assert.equal('abcde'.padStart(10, 12345), '12345abcde');
assert.equal('abcde'.padStart(9, 12345), '1234abcde');
assert.equal('abcde'.padStart(8, 12345), '123abcde');
assert.equal('abcde'.padStart(7, 12345), '12abcde');
assert.equal('abcde'.padStart(6, 12345), '1abcde');
assert.equal('abcde'.padStart(5, 12345), 'abcde');
assert.equal('abcde'.padStart(4, 12345), 'abcde');
assert.equal('abcde'.padStart(3, 12345), 'abcde');
assert.equal('abcde'.padStart(2, 12345), 'abcde');
assert.equal('abcde'.padStart(1, 12345), 'abcde');
assert.equal('abcde'.padStart(0, 12345), 'abcde');
assert.equal('abcde'.padStart(-1, 12345), 'abcde');
assert.equal('abcde'.padStart(-2, 12345), 'abcde');
assert.equal('abcde'.padStart(-3, 12345), 'abcde');
assert.equal('abcde'.padStart(-4, 12345), 'abcde');
assert.equal('abcde'.padStart(-5, 12345), 'abcde');

assert.equal('abcde'.padStart(10, null), 'nullnabcde');
assert.equal('abcde'.padStart(9, null), 'nullabcde');
assert.equal('abcde'.padStart(8, null), 'nulabcde');
assert.equal('abcde'.padStart(7, null), 'nuabcde');
assert.equal('abcde'.padStart(6, null), 'nabcde');
assert.equal('abcde'.padStart(5, null), 'abcde');
assert.equal('abcde'.padStart(4, null), 'abcde');
assert.equal('abcde'.padStart(3, null), 'abcde');
assert.equal('abcde'.padStart(2, null), 'abcde');
assert.equal('abcde'.padStart(1, null), 'abcde');
assert.equal('abcde'.padStart(0, null), 'abcde');
assert.equal('abcde'.padStart(-1, null), 'abcde');
assert.equal('abcde'.padStart(-2, null), 'abcde');
assert.equal('abcde'.padStart(-3, null), 'abcde');
assert.equal('abcde'.padStart(-4, null), 'abcde');
assert.equal('abcde'.padStart(-5, null), 'abcde');

assert.equal('abcde'.padStart(10.0, 12345), '12345abcde');
assert.equal('abcde'.padStart(9.9, 12345), '1234abcde');
assert.equal('abcde'.padStart(8.7, 12345), '123abcde');
assert.equal('abcde'.padStart(7.5, 12345), '12abcde');
assert.equal('abcde'.padStart(6.3, 12345), '1abcde');
assert.equal('abcde'.padStart(5.1, 12345), 'abcde');
assert.equal('abcde'.padStart(4.8, 12345), 'abcde');
assert.equal('abcde'.padStart(3.6, 12345), 'abcde');
assert.equal('abcde'.padStart(2.4, 12345), 'abcde');
assert.equal('abcde'.padStart(1.2, 12345), 'abcde');
assert.equal('abcde'.padStart(0, 12345), 'abcde');
assert.equal('abcde'.padStart(-1.0, 12345), 'abcde');
assert.equal('abcde'.padStart(-2.2, 12345), 'abcde');
assert.equal('abcde'.padStart(-3.4, 12345), 'abcde');
assert.equal('abcde'.padStart(-4.6, 12345), 'abcde');
assert.equal('abcde'.padStart(-5.8, 12345), 'abcde');