const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    publicPath: '/',
    runtimeCompiler: true,
    devServer: {
        port: 8080,
        proxy: {
            "/api": {
                target: "http://198.199.94.76",
                changeOrigin: false
            },
        }
    },
    chainWebpack: config => {
        plugins: [
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Alfa Slab One", variants: [ "400", "800" ] },
                    { family: "Bitter", variants: [ "400", "800" ] }
                ]
            })
        ]
     }
}
