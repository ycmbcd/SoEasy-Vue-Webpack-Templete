const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,   // 启用缓存，提高打包速度
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // $: 'jquery',    // 加载jQuery像这样
      // jQuery: 'jquery'  // 加载jQuery或者像这样
    }),
    new VueLoaderPlugin()
  ]
};
