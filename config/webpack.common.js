const path               = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin  = require('extract-text-webpack-plugin');
// Манифест - при сборке создаёт файл manifest.json, в котором написаны все преобразования файлов
const ManifestPlugin     = require('webpack-manifest-plugin');
// Вариарт как хранить отдельно готовую сборку стилей и свою/свои
const extractMinCSS      = new ExtractTextPlugin('css/bootstrap.min.css');
const extractStylus      = new ExtractTextPlugin('style.css');

module.exports = {
    resolve: {
        // Позволяет использовать данные пути в import
        alias: {
            Images: path.resolve(__dirname, 'src/resources/images'),
            Styles: path.resolve(__dirname, 'src/resources/css')
        },
        extensions: ['*', 'jsx', '.webpack.js', '.web.js', '.js', '.json']
    },
    plugins: [
        new ManifestPlugin(),
        extractMinCSS,
        extractStylus,
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: path.resolve(__dirname, '../src/resources/icons/favicon.png'),
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                removeComments: true,
                removeTagWhitespace: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        })
    ],
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            { 
                test: /\.min\.css/,
                loader: extractMinCSS.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
			},
			{
                test: /\.styl$/,
                loader: extractStylus.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
            },
            // Мне не нравится, когда имена файлов в сборке отличается
            // от тех, которые я им давал изначально
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader?name=images/[name].[ext]']
            },
            {
                test: /\.(ico)$/,
                use: ['file-loader?name=icons/[name].[ext]']
            }
        ]
    }
};