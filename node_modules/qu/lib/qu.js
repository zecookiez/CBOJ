var Item = function Item(data, next) {
  this.data = data;
  this.next = next;
};

var Queue = function Queue() {
  this._head = null;
  this._tail = null;
  this.length = 0;
};

Queue.fromArray = function(array) {
  for (var i = 0, queue = new Queue(); i < array.length; i++)
    queue.push(array[i]);
  return queue;
};

Queue.prototype.enqueue =
Queue.prototype.push = function(data) {
  var prev = this._tail;
  this._tail = new Item(data, null);
  if (prev)
    prev.next = this._tail;
  else
    this._head = this._tail;
  this.length++;
  return this;
};

Queue.prototype.unshift = function(data) {
  this._head = new Item(data, this._head);
  if (!this._tail)
    this._tail = this._head;
  this.length++;
  return this;
};

Queue.prototype.dequeue =
Queue.prototype.shift = function() {
  var data = this._head.data;
  this._head = this._head.next;
  if (!this._head)
    this._tail = null;
  this.length--;
  return data;
};

Queue.prototype.head =
Queue.prototype.peek = function() {
  return this._head.data;
};

Queue.prototype.tail = function() {
  return this._tail.data;
};

Queue.prototype.rotate =
Queue.prototype.cycle = function() {
  var item = this._head;
  this._tail.next = item;
  this._head = item.next;
  item.next = null;
  this._tail = item;
  return item.data;
};

Queue.prototype.drop =
Queue.prototype.empty = Queue;

Queue.prototype.each =
Queue.prototype.forEach = function(fn, me) {
  for (var item = this._head, i = 0; item; item = item.next)
    fn.call(me, item.data, i++, this);
};

Queue.prototype.toArray = function() {
  var array = new Array(this.length);
  for (var item = this._head, i = 0; item; item = item.next)
    array[i++] = item.data;
  return array;
};

module.exports = Queue;
