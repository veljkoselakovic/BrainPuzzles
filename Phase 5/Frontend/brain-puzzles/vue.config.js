// const { defineConfig } = require('@vue/cli-service')

const path = require('path');
module.exports =  { 
  publicPath : '',
  outputDir: path.resolve(__dirname, '../../Backend/brain-puzzles/static/src/vue/dist'),
  filenameHashing: false,
  // runtimeCompiler:true,
  devServer: {
    devMiddleware: {
      // see https://github.com/webpack/webpack-dev-server/issues/2958
      writeToDisk: true, 
    }, 
    port: '8080',
    // disableHostCheck: true,

    
  }
}
