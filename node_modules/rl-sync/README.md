# rl-sync
rl-sync is a synchronous prompt with support for Windows and Linux.

# Usage:
rl-sync is made to be easy to use and simple.
To use rl-sync, simply require the module and call the prompt function like this:
```js
const prompt = require('rl-sync');
console.log('Hello,', prompt('What\'s your name? '));
```

rl-sync allows you to use masks for the prompt if you'd like to hide input, like this:
```js
const prompt = require('rl-sync');
console.log('Hello,', prompt('What\'s your name? ', '*'));
```
The second argument passed in is a `*`, meaning it will display '*' instead of the actual character passed in.