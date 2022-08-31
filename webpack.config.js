const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
        publicPath: '/', //new
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer: {
        historyApiFallback: true, //new
        static: {
          publicPath: '/build', //us telling webpack to have browser look in this location for bundle file
          directory: path.join(__dirname, 'build'), //
        },
        compress: true,
        port: 8080,
      }, 
}


 // target: "web",
    // devServer: {
    //     port: "3000",
    //     static: ["./public"],
    //     open: true,
    //     hot: true,
    //     liveReload: true,
    // },
    //     resolve: {
    //         extensions: [".js", ".jsx", ".json", ".ts"],
    //     },
    //     module: {
    //         rules: [
    //             {
    //                 test: /\.(js|jsx)$/,
    //                 exclude: /node_modules/,
    //                 use: "babel-loader",
    //             },
    //         ],
    //     },