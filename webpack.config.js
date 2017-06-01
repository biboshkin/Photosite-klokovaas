const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    watch: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},
	resolve: {
		extensions: ['.js', '.jsx', '.css', ""]
	},
    devtool: 'eval',
	module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ],
		loaders: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', 'stage-0' ]
                }
            }
        ],
	}
}