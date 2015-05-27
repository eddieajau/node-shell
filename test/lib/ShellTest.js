/**
 * Shell tests.
 *
 * Remember to observe the 4 A's of testing and try to limit tests to just four calls:
 * - Arrange    - set up the system state
 * - Act        - do the thing we are testing
 * - Assert     - inspect the resulting state
 * - Annihilate - tear down
 */

var assert = require('assert');
var Shell = require('app-root-path').require('/lib/index.js');

suite('Shell', function () {

	test('should execute a shell command', function () {
		var cwd = __dirname;

		return Shell.exec('ls', ['-w'], { cwd: __dirname })
			.then(function (result) {
				assert.deepEqual(result, {
					code: 0,
					stdout: [
						'ShellTest.js'
					],
					stderr: []
				})
			});
	});

	test('should invoke a logger', function () {
		var cwd = __dirname;
		var logs = [];
		var logger = function (msg) {
			logs.push(msg);
		};

		Shell.setLogger(logger);

		return Shell.exec('ls', ['-u'], { cwd: __dirname })
			.then(function (result) {
				assert.deepEqual(logs, [
					'ls -u'
				])
			});
	});
});
