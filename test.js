/* eslint-disable */

var assert = require('assert');
var postprocess = require('.');

var code = 'function t(t,o,e,i){for(i=0,o=o.split?o.split("."):o;t&&i<o.length;)t=t[o[i++]];return void 0===t?e:t}module.exports=t;';

var name, exportPrefix;
var out = postprocess([
	[/(module\.exports\s*=\s*|export\s*default\s*)([a-zA-Z$_][a-zA-Z0-9$_]*)[;,]?/, function(str, prefix, id) {
		name = id;
		exportPrefix = prefix;
	}],
	[/^function\s([a-zA-Z$_][a-zA-Z0-9$_]*)/, function(str, id) {
		if (id===name) {
			return exportPrefix + str;
		}
		return str;
	}]
]).transformBundle(code, { sourceMap: false });

assert.equal(out.code, 'module.exports=function t(t,o,e,i){for(i=0,o=o.split?o.split("."):o;t&&i<o.length;)t=t[o[i++]];return void 0===t?e:t}');
console.log('✅ Tests Passed');
process.exit(0);
