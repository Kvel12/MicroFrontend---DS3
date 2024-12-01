// container/webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const domain = process.env.PRODUCTION_DOMAIN || 'http://10.0.0.10:30080';

module.exports = {
  mode: 'development',
  output: {
    publicPath: `${domain}/`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        auth: `auth@${domain}/auth/remoteEntry.js`,
        projects: `projects@${domain}/projects/remoteEntry.js`,
        payments: `payments@${domain}/payments/remoteEntry.js`,
        support: `support@${domain}/support/remoteEntry.js`
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@material-ui/core': { singleton: true },
        'react-router-dom': { singleton: true }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};