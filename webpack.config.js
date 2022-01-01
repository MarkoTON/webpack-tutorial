const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: 'dist/' // default is auto i onda hvata ceo path od pocetka C://, nije lose da se stavi path
        // publicPath: 'http://some-cdn.com/' // default is auto i onda hvata ceo path od pocetka C://, nije lose da se stavi path
    },
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            }
        ]
    }
};
