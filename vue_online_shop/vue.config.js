module.exports = {
    devServer: {
        port: 3000,
        publicPath: '/',
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080/',
                pathRewrite: { '^/api' : '' },
                secure: false,
                changeOrigin: true
            }
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    },
    css:{
        loaderOptions:{
            sass:{
                prependData: `@import "@/assets/styles/styles.scss";`
            }
        }
    }
}