module.exports = {
    publicPath: './',
    lintOnSave: false,
    // 配置跨域请求
    devServer: {
      open: true,
      host: 'localhost',
      port: 8080,
      proxy: { // 配置跨域
        '/api': {
          target: 'http://localhost:8080/',
          ws: true,
          // 是否开启代理
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
  