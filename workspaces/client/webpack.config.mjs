import path from 'node:path';

// import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';

import webpack from 'webpack';
/** @type {import('webpack').Configuration} */
const config = {
  cache: {
    type: 'filesystem',
  },
  entry: './src/main.tsx',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: [/node_modules\/video\.js/, /node_modules\/@videojs/],
        resolve: {
          fullySpecified: false,
        },
        test: /\.(?:js|mjs|cjs|jsx|ts|mts|cts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: '3.41',
                  forceAllTransforms: true,
                  targets: 'defaults',
                  useBuiltIns: 'entry',
                },
              ],
              ['@babel/preset-react', { runtime: 'automatic' }],
              ['@babel/preset-typescript'],
            ],
          },
        },
      },
      {
        test: /\.png$/,
        type: 'asset/inline',
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
      {
        resourceQuery: /arraybuffer/,
        type: 'javascript/auto',
        use: {
          loader: 'arraybuffer-loader',
        },
      },
    ],
  },
  output: {
    chunkFilename: 'chunk-[contenthash].js',
    chunkFormat: 'module',
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, './dist'),
    publicPath: 'auto',
  },
  plugins: [
    // new webpack.optimize.LimitChunkCountPlugin({maxChunks: 1}),
    new webpack.EnvironmentPlugin({ API_BASE_URL: '/api', NODE_ENV: 'production' }),
    // new BundleAnalyzerPlugin()
  ],
  resolve: {
    extensions: ['.js', '.cjs', '.mjs', '.ts', '.cts', '.mts', '.tsx', '.jsx'],
  },
  stats: 'verbose',
};

export default config;
