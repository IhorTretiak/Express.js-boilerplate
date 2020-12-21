// Core
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


export function makeBundleAnalyzer() {
  return {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode:      'disabled',
        generateStatsFile: true,
        statsFilename:     'bundle-stats.json',
        openAnalyzer:      false,
      }),
    ],
  };
}
