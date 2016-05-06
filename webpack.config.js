var path              = require('path');
var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PATHS = {
    build : path.resolve(__dirname, 'public'),
    main  : path.resolve(__dirname, 'assets', 'js', 'app.js'),
};

module.exports = {
    entry: {
        main: [ PATHS.main ],
        vendor: ['react', 'react-dom'],
    },

    output: {
        path: PATHS.build,
        filename: '[name].js',
    },

    watchOptions: {
        poll: true
    },

    module: {
        loaders: [{
            test:   /\.js$/,
            loader: 'babel',
            include: __dirname + '/assets/js',
            query: {
                presets: ["es2015", "react"]
            }
        }, {
            test: /\.jsx$/,
            loader: "babel",
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react"]
            }
        }, {
            test:   /\.scss$/,
            loader: ExtractTextPlugin.extract('css!sass')
        }, {
            test:   /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            '__BASE_URL__' : JSON.stringify(process.env['K8_NODE_PORT_HOST'])
        }),
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
    ]
};
