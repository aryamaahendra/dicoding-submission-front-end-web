const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
   entry: "./src/app.js",
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js"
   },
   module: {
      rules: [{
         test: /\.(scss)$/,
         use: [{
               loader: 'style-loader'
            },
            {
               loader: 'css-loader'
            },
            {
               loader: 'postcss-loader',
               options: {
                  plugins: function () {
                     return [
                        require('autoprefixer')
                     ];
                  }
               }
            },
            {
               loader: 'sass-loader'
            }
         ]
      }, {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
            'file-loader',
         ],
      }]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "./src/index.html",
         filename: "index.html"
      })
   ]
}