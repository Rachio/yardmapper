var path = require('path');

module.exports = {
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {
                test: /\.svg$/i,
                use: ['url-loader?hash=sha512&digest=hex&name=[hash].[ext]']
              },
              {
                test: /\.(eot|woff|woff2|ttf)$/,
                use: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
              },
              {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      mozjpeg: {
                        progressive: true
                      },
                      gifsicle: {
                        interlaced: false
                      },
                      optipng: {
                        optimizationLevel: 7
                      },
                      pngquant: {
                        quality: '75-90',
                        speed: 3
                      }
                    }
                  }
                ]
              }
        ]
    }
}