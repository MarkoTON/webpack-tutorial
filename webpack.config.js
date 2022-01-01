const path = require('path');

module.exports = {
    // Hvata koji .js da je osnova. Moze da se menja
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none'
};
