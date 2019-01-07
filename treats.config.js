const path = require('path');

const config = {
	app: {
		name: 'treats-example',
		slug: 'treats-example'
	},
	alias: {
		'@page': path.resolve(__dirname, './src/page'),
		'@components': path.resolve(__dirname, './src/components'),
		'@graphql': path.resolve(__dirname, './src/graphql')
	}
};

module.exports = config;
