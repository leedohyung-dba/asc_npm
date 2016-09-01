// webpack.config.js
module.exports = {
    entry: {
        index: __dirname + '/src/index.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {test: /\.json$/, loader: 'json-loader'},
        ]
    },
    node: {
	fs: 'empty',
	net: 'empty',
	tls: 'empty'
    }
};
