const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
      // {
      //   test: /\.(css)$/,
      //   use: ["style-loader", "css-loader"],
      // },
      // {
      //   test: /\.(png)$/,
      //   use: ["file-loader"],
      // },
    ],
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".css", ".gif", "jpg", "png", "mp4"],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8000,
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'index.html'
  })]
};
