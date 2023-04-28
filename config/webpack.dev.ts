import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common';

export default merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    port: 3001,
    hot: true,
    open: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
      'ngrok-skip-browser-warning': 'true',
    },
    proxy: {
      '/api': {
        target: 'https://29ec-188-254-110-254.ngrok-free.app/',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
