const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = app => {
  app.use(createProxyMiddleware('/uwapi', {
    target: 'http://test1.uyingbet.com/',
    changeOrigin: true,
    pathRewrite: {
      '^/uwapi': ''
    }
  }))
}