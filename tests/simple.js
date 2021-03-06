var supergenpass = require('../supergenpass-lib');

var data = [
  ['w9UbG0NEk7', 'test', 'example.com'],
  ['sJfoZg3nU8', 'test', 'example.com', { method: 'sha512' }],
  ['aC81', 'test', 'example.com', { length: 4, method: 'sha512' }],
  ['vBKDNdjhhL6dBfgDSRxZxAAA', 'test', 'example.com', { length: 24, method: 'md5' }],
  ['sJfoZg3nU8y32EyHFRlSY08u', 'test', 'example.com', { length: 24, method: 'sha512' }],
  ['zPQSNhTzs9fS', 'test', 'https://www.google.com/', { length: 12, secret: 'test' }],
  ['q8ZWYccWDt', 'test', 'https://www.google.com/', { removeSubdomains: false, method: 'sha512' }],
  ['aRFG84Gim9', 'test', 'example.co.uk'],
  ['hSF8nTst4A', 'test', 'example.gov.ac']
];

exports.testSimple = {};

data.forEach(function (c, i) {
  exports.testSimple[i] = function (test) {
    test.expect(1);
    supergenpass(c[1], c[2], c[3], function (password) {
      test.equal(password, c[0]);
      test.done();
    });
  };
});
