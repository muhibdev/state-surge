const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      name: "MyLibrary",
      type: "umd",
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: "tsconfig.json",
        },
      },
      {
        test: /\.js$/,
        loader: "swc-loader",
      },
    ],
  },
  stats: {
    errorDetails: true,
  },
};
