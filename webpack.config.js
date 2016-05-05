var path    = require('path');
var webpack = require('webpack');

var PATHS = {
    build : path.resolve(__dirname, 'public'),
    main  : path.resolve(__dirname, 'assets', 'js', 'app.js'),
};

module.exports = {
    entry: {
        main: [ PATHS.main ],
        vendor: [],
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
        }]
    },
};
