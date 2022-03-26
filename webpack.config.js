const HtmlWebPackPlugin = require("html-webpack-plugin");
import { SomeComponent } from 'react-native'
import { SomeComponent } from 'react-native-web'
module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules\/(?!()\/).*/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
        }),
    ],

    devServer: {
        historyApiFallback: true,
        contentBase: "./",
        hot: true,
    },
    resolve: {
        alias: {
            "react-native": "react-native-web"
        },
        extensions: [".web.js", ".js"]
    },
    "scripts": {
        "start": "webpack-dev-server --config ./webpack.config.js --mode development",
    },
};