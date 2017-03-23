const path = require('path');
const webpack = require('webpack');
const root = path.resolve(__dirname, '../../themes/mytheme/vendor/htmlburger/carbon-fields');

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
