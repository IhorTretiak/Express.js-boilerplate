// Core
import { resolve } from 'path';
import { DefinePlugin } from 'webpack';
import dotenv from 'dotenv';


const dotEnv = dotenv.config({
  path: resolve(__dirname, '../../.env'),
});

export function makeEnvVariables() {
  return {
    plugins: [
      new DefinePlugin({
        'process.env': JSON.stringify(dotEnv.parsed),
      }),
    ],
  };
}
