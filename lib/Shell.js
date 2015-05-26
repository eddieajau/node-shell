/**
 * Simple shell command runner for Node.js that supports promises.
 */

"use strict";

var spawn = require('child_process').spawn;

/**
 * Run a shell command in a child process.
 *
 * @param {string} cmd     - The command to execute.
 * @param {array}  args    - An array of string arguments
 * @param {object} options - Options that match child_process.spawn
 * @returns {Promise.<object>} - Returns { code: <code>, stdout: [...], stderr: [...] }
 * @see {@link https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options}
 */
function exec(cmd, args, options) {
	return new Promise(function (resolve, reject) {
		var stdout = [];
		var stderr = [];
		var proc = spawn(cmd, args, options);

		proc.stdout.on('data', function (data) {
			stdout.push(data.toString().trim());
		});

		proc.stderr.on('data', function (data) {
			stderr.push(data.toString().trim());
		});

		proc.on('error', function (err) {
			return reject(err);
		});

		proc.on('close', function (code) {
			return resolve({
				code: code,
				stdout: stdout,
				stderr: stderr
			})
		});
	});
}

module.exports = {
	exec: exec
};
