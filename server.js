const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy all requests to target server
app.use('/', createProxyMiddleware({
  // target: 'http://47.104.226.75',
  target : 'http://8.154.46.200',
  changeOrigin: true,
  pathRewrite: {'^/': '/'}
}));

// Listen on Render’s PORT
const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Proxy running on port ${port}`));
