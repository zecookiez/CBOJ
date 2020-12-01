qu
==

A simple and efficient queue. Supports a subset of `Array`'s methods, stores data in a singly-linked list.

_Note:_ this is not faster than using JavaScript's built-in arrays, just to appease my conscience.

Install
=======

[npm][]
-------

```sh
$ npm install qu
```

[github][]
----------

```sh
$ git clone https://github.com/skeggse/qu.git
```

Test
====

Run any of the following.

```
$ mocha
$ npm test
$ make test
```

_remember to_ `npm install`!

Methods
=======

### `push` _(alias: `enqueue`)_ **O(1)**

Puts the item at the end of the queue. Accepts one item at a time, unlike `Array.push`.

### `unshift` **O(1)**

Places the item at the beginning of the queue. Accepts one item at a time, unlike `Array.push`.

### `shift` _(alias: `dequeue`)_ **O(1)**

Removes the first item from the queue.

### `peek` _(alias: `head`)_ **O(1)**

Peeks at the first item in the queue. No side effects.

### `tail` **O(1)**

Peeks at the last item in the queue. No side effects.

### `cycle` _(alias: `rotate`)_ **O(1)**

Equivalent to shifting then pushing.

### `empty` _(alias: `drop`)_ **O(1)**

Removes all items from the queue.

### `forEach` _(alias: `each`)_ **O(N)**

Think `Array.forEach`.

### `toArray` **O(N)**

Returns the Array representation of the Queue. Avoid overusing this.

Members
=======

### `length`

The length of the queue. Don't modify this. If you want to empty the queue, use `empty`.

Unlicense / Public Domain
=========================

> This is free and unencumbered software released into the public domain.

> Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

> In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

> For more information, please refer to <[http://unlicense.org/](http://unlicense.org/)>

[npm]: http://npmjs.org/package/qu "qu on npm"
[github]: https://github.com/skeggse/qu "qu on github"
