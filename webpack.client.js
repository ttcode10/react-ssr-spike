const path = require("path");

module.exports = {
  target: "node",
  entry: "./src/client/client.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,

      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 50,
              name: 'assets/[name].[ext]'//相对于path的路径
            }
          },
        ],
      },
    ],

  },
};
