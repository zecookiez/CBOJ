var expect = require('expect.js');

var Queue = require('..');

var greek = [
  'alpha',
  'beta',
  'gamma',
  'delta',
  'epsilon',
  'zeta',
  'eta',
  'theta',
  'iota',
  'kappa',
  'lambda',
  'mu',
  'nu',
  'xi',
  'omicron',
  'pi',
  'rho',
  'sigma',
  'tau',
  'upsilon',
  'phi',
  'chi',
  'psi',
  'omega'
];

describe('Queue', function() {
  var test = function(queue) {
    expect(queue.length).to.equal(24);
    expect(queue.shift()).to.equal('alpha');
    expect(queue.length).to.equal(23);

    expect(queue.cycle()).to.equal('beta');
    expect(queue.peek()).to.equal('gamma');
    expect(queue.tail()).to.equal('beta');

    var state = greek.slice(1);
    state.push(state.shift());
    expect(queue.toArray()).to.eql(state);

    queue.empty();

    expect(queue._head).to.equal(queue._tail);
    expect(queue.length).to.equal(0);
  };

  it('should work', function() {
    var queue = new Queue();

    expect(queue._head).to.equal(queue._tail);
    expect(queue.length).to.equal(0);

    queue.push(greek[0]);

    expect(queue._head).to.equal(queue._tail);
    expect(queue.length).to.equal(1);

    for (var i = 1; i < greek.length; i++)
      queue.push(greek[i]);

    test(queue);
  });

  it('should work fromArray', function() {
    test(Queue.fromArray(greek));
  });

  it('should alias', function() {
    var queue = new Queue();

    expect(queue.push).to.equal(queue.enqueue);
    expect(queue.shift).to.equal(queue.dequeue);
    expect(queue.peek).to.equal(queue.head);
    expect(queue.cycle).to.equal(queue.rotate);
    expect(queue.empty).to.equal(queue.drop);
    expect(queue.forEach).to.equal(queue.each);
  });
});
