var path = require('path');

var config = {
  entry: {
    main: [
      './src/index.ts'
    ],
  },
  output: {
    path: path.join(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.ts?$/,
  //       use: 'awesome-typescript-loader'
  //     }
  //   ]
  // },
  mode: "production"
};

module.exports = config;