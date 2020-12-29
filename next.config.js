const withCSS = require('@zeit/next-css');
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const withOffline = require('next-offline');

const nextConfig = /* withOffline */ {
  webpack: config => {
    config.plugins = config.plugins || [];
    config.node = {
      cssModules: true,
      fs: 'empty'
    };
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
    return config;
  },
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^(https)?.*/,
        handler: 'networkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60 // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    ]
  }
};

module.exports = withCSS(nextConfig);
