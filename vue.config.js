module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/api':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/user':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/register':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/myUser':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/changePass':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/loginOut':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/getGoods':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/addGoods':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
      '/deleteGoods':{
        target: 'http://localhost:8899',
        changeOrigin: true
      },
    }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false
};
