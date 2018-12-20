const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require( 'terser-webpack-plugin' );

/**
 * Indicates if we're running the build process in production mode.
 *
 * @type {Boolean}
 */
const isProduction = process.env.NODE_ENV === 'production';

/**
 * This path assumes that Carbon Fields and the current template
 * are both in the `/vendor` directory inside your theme - change the path if needed.
 */
const root = path.resolve(__dirname, '../vendor/htmlburger/carbon-fields');

if (!fs.existsSync(root)) {
    console.error('Could not find Carbon Fields folder.');
    process.exit(1);
    return;
}

module.exports = {
    entry: './assets/js/bootstrap.js',

    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            }
        ]
    },

    resolve: {
        modules: [
            path.resolve(__dirname, 'assets/js'),
            path.resolve(root, 'packages'),
            'node_modules'
        ]
    },

    plugins: [
        ...(
            isProduction
            ? [
                new TerserPlugin( {
                    cache: true,
                    parallel: true
                } )
            ]
            : []
        )
    ],

    stats: {
        modules: false,
        hash: false,
        builtAt: false,
        children: false
    }
};
