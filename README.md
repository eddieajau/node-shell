# Node.js Shell
[![Build Status](https://travis-ci.org/eddieajau/node-shell.svg?branch=master)](https://travis-ci.org/eddieajau/node-shell)
[![Dependency Status](https://gemnasium.com/eddieajau/node-shell.svg)](https://gemnasium.com/eddieajau/node-shell)

A simple command runner for Node.js with promise support.

## Installation

```sh
$ npm install @eddieajau/shell
```

## Example

```js
var Shell = require('@eddieajau/shell');

Shell.exec('ls', [], { cwd: __dirname })
	.then(function (result) {
		console.log('The command returned %d', result.code);
		console.log('STDOUT:', result.stdout.join('\n'));
		console.log('STDERR:', result.stderr.join('\n'));
	})
	.catch(function (err) {
		console.error('The child process emitted an error.', err);
	});
```

## Code quality and tests

```sh
$ npm run lint
$ npm run test
```

## License

MIT
