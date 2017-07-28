const merge = require('webpack-merge');
const path  = require('path');

// Другие настройки
const common        = require('./config/webpack.common');
const production    = require('./config/webpack.production.js');
const development   = require('./config/webpack.development.js');
const webpack_mode  = process.env.npm_lifecycle_event || 'dev';
const build_configs = webpack_mode === 'prod' ? production : development;

module.exports = merge(common, build_configs, {
    entry: { 
        main: ['./src/main.js']
    },
    output: {
        path: path.join(__dirname, 'static'),
		filename: 'js/[name].js'
    }
});


if (webpack_mode === 'dev') {
    console.log('Webpack запущен в режиме development');
}
if (webpack_mode === 'prod') {
    console.log('Webpack запущен в режиме production');
}