'use strict';

module.exports = {
	root: true,
	parser: 'babel-eslint',
  extends: 'airbnb',
	env: { browser: true },
	rules: {
		indent: [2, 'tab'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 0,
	},
	overrides: [
		{
			files: ['webpack.config.js', 'babel.config.js'],
			parserOptions: { sourceType: 'script' },
			env: { browser: false, node: true },
			rules: { strict: [2, 'global'] },
		},
		{
			files: ['**/*.spec.js'],
			env: { jest: true },
		},
	],
};
