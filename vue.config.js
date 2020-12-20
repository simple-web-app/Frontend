module.exports = {
  devServer: {
    port: 9000,
    proxy: {
      '^/api': {
        target: 'http://cahn233.cn:3333',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
