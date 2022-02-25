const path = require('path')
const {
  override,
  // addLessLoader,
  addWebpackAlias,
  overrideDevServer,
  fixBabelImports
} = require('customize-cra')

// 配置代理
// const proxy = {
//   '/api': {
//     target: 'http://localhost:3000',
//     changeOrigin: true
//   }
// }
const devServerConfig = () => config => {
  return {
    ...config,
    // proxy
  }
}

// 修改端口号
// process.env.PORT = 3031

module.exports = {
  webpack: override(
    addWebpackAlias({
      // 路径别名，还需要配置tsconfig.json、tsconfig-base.json，在后面，可配置多个路径别名
        '@': path.resolve(__dirname, 'src/')
    }),
    // antd按需加载
    fixBabelImports('import', { 
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true // 支持less
    })
  ),
  devServer: overrideDevServer(devServerConfig()) 
}
