const path = require('path');
const webpack = require('webpack');
/*
This path assumes that Carbon Fields and the current template
are both in the /plugins dir. Change it according to your needs
*/
const root = path.resolve(__dirname, '../carbon-fields');

module.exports = {
	entry: './src/bootstrap.js',
	output: {
		path: path.resolve(__dirname, './js'),
		publicPath: '/js/',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader?cacheDirectory=true',
				exclude: /node_modules/
			}
		]
	},

	resolve: {
		modules: [
			path.resolve(root, 'assets/react'),
			path.resolve(__dirname, 'src'),
			'node_modules'
		]
	},

	devtool: 'cheap-module-source-map',

	plugins: [
		new webpack.DllReferencePlugin({
			sourceType: 'this',
			manifest: require(path.resolve(root, 'assets/carbon.vendor.json'))
		}),

		new webpack.DllReferencePlugin({
			context: root,
			sourceType: 'this',
			manifest: require(path.resolve(root, 'assets/carbon.core.json'))
		})
	],
};
