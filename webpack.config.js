var HtmlWebpackPlugin = require('html-webpack-plugin');
var prefix = './pages/'
var pages = ['page1', 'page2', 'page3', 'page4'];
var entries = {}
pages.forEach(p => {
	entries[p] = prefix + p + '.js';
});

var HTMLPlugs = pages.map(p => {
	return new HtmlWebpackPlugin({
		template: __dirname + '/templates/index.html',
		chunks: [p],
		filename: p + '.html',
		inject: 'body'
	});
});


module.exports = {
	entry: entries,
	output: {
		filename: "[name]_bundle.js",
		path: __dirname + '/dist'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]

	},
	plugins: HTMLPlugs
};