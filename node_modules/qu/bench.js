var bench = require('bench');

var Queue = require('./');

exports.compare = {
  "smallqueue []": function() {
    var i = 0, queue = [];
    for (; i < 50; i++)
      queue.push(i);
    for (i = 0; i < 50; i++)
      queue.shift();
  },
  "smallqueue new Queue()": function() {
    var i = 0, queue = new Queue();
    for (; i < 50; i++)
      queue.push(i);
    for (i = 0; i < 50; i++)
      queue.shift();
  },
  "queue []": function() {
    var i = 0, queue = [];
    for (; i < 5000; i++)
      queue.push(i);
    for (i = 0; i < 5000; i++)
      queue.shift();
  },
  "queue new Queue()": function() {
    var i = 0, queue = new Queue();
    for (; i < 5000; i++)
      queue.push(i);
    for (i = 0; i < 5000; i++)
      queue.shift();
  },
  "largequeue []": function() {
    var i = 0, queue = [];
    for (; i < 1000000; i++)
      queue.push(i);
    for (i = 0; i < 1000000; i++)
      queue.shift();
  },
  "largequeue new Queue()": function() {
    var i = 0, queue = new Queue();
    for (; i < 1000000; i++)
      queue.push(i);
    for (i = 0; i < 1000000; i++)
      queue.shift();
  }
};

bench.runMain();
