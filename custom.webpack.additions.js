const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.shit-css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
};
