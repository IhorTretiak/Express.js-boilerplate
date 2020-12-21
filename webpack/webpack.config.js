// Core
import excludeNodeModules from 'webpack-node-externals';
// Instruments
import merge from 'webpack-merge';
import { makeEnvVariables, makeBundleAnalyzer } from './modules';
// Presets
import { entry, build } from './paths';


const isProductionMode = process.env.NODE_ENV === 'production';

export default merge(
  {
    mode:   'production',
    entry,
    target: 'node',
    output: {
      path:          build,
      filename:      'index.js',
      chunkFilename: '[id].js',
    },
    externals: [excludeNodeModules()],
    module:    {
      rules: [
        {
          test:    /\.js$/,
          exclude: /node_modules/,
          loader:  'babel-loader',
        },
      ],
    },
  },
  makeBundleAnalyzer(),
  isProductionMode ? makeEnvVariables() : null,
);
