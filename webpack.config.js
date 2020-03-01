module.exports = {
  output: {
    filename: "script.js"
  },
  devtool: "eval-source-map",
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: [["latest", { modules: false }]]
        }
      }
    ]
  }
};
