const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs'),
        assetModuleFilename: 'assets/[name][ext]',
    },
    devServer: {
        static: path.resolve(__dirname, 'docs'),
        port: 8081,
        hot: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body'
        })
    ],
    ignoreWarnings: [
        (warning) => warning.message.includes('Deprecation'),
        (warning) => warning.message.includes('repetitive deprecation'),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|webp)$/i, // Добавляем webp
                type: 'asset/resource', // Используем встроенный механизм Webpack
            },
            {
                test: /\.(mp4|webm|ogg)$/i, // Регулярное выражение для видеофайлов
                type: 'asset/resource', // Обработка через встроенный asset/resource
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                    },
                    {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }
}