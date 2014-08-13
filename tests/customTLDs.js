var supergenpass = require('../supergenpass-lib');
var tldjs = require('tldjs');

exports.testCustomTLDs = function (test) {

  var hostnames = [
    [
      'http://www.google.com/search',  // input URI
      'google.com',                    // default
      'www.google.com'                 // removeSubdomains = false
    ],
    [
      'https://mail.google.com/mail/u/0/',
      'google.com',
      'mail.google.com'
    ],
    [
      'ftp://pandis.ucs.cam.ac.uk/media/',
      'cam.ac.uk',
      'pandis.ucs.cam.ac.uk'
    ],
    [
      'imap://mail.outlook.com:443',
      'outlook.com',
      'mail.outlook.com'
    ],
    [
      'ssh://server.example.com:~/public',
      'example.com',
      'server.example.com'
    ],
    [
      'git://git@github.com:user/repo.git',
      'github.com',
      'github.com'
    ],
    [
      'gopher://user:password@gopher.example.com',
      'example.com',
      'gopher.example.com'
    ],
    [
      'ftp://user:password@ftp.example.com:21/files/',
      'example.com',
      'ftp.example.com'
    ],
    [
      'www.example.com/path/to/page?param=value',
      'example.com',
      'www.example.com'
    ],
    [
      'sapporo.hokkaido.jp',
      'sapporo.hokkaido.jp',
      'sapporo.hokkaido.jp'
    ],
    [
      'http://www.test.ltd.co.im',
      'test.ltd.co.im',
      'www.test.ltd.co.im'
    ],
    [
      'https://once.again.i.forgot.her.name',
      'i.forgot.her.name',
      'once.again.i.forgot.her.name'
    ],
    [
      'admin@ec2-0-0-0-0.eu-west-1.compute.amazonaws.com:8888',
      'ec2-0-0-0-0.eu-west-1.compute.amazonaws.com',
      'ec2-0-0-0-0.eu-west-1.compute.amazonaws.com'
    ],
    [
      'api.example.com:80',
      'example.com',
      'api.example.com'
    ],
    [
      '192.168.0.1',
      '192.168.0.1',
      '192.168.0.1'
    ],
    [
      'http://8.8.8.8/',
      '8.8.8.8',
      '8.8.8.8'
    ]
  ];

  hostnames.forEach(function(c) {
    test.equal(supergenpass.hostname(c[0], { removeSubdomains: tldjs.getDomain.bind(tldjs) }), c[1]);
    test.equal(supergenpass.hostname(c[0], { removeSubdomains: false }), c[2]);
  });

  test.done();

};
