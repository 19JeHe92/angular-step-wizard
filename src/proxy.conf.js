var zlib = require('zlib');

const PROXY_CONFIG = {
  "/api": {
    "target": "http://localhost:3000",
    "secure": false,
    "changeOrigin": true,
    "pathRewrite": {
      "^/api": ""
    },
    "headers": {
      "host": "localhost:3000"
    }
  },
};

module.exports = PROXY_CONFIG;
