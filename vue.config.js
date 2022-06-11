
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `@import "~@/assets/globalscss.module.scss";`
      },
    }
  }, 
  productionSourceMap: false,
  lintOnSave: false, 
}