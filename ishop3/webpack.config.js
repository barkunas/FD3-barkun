const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const extractCSS = new MiniCssExtractPlugin ({filename: './bundle.css',});

module.exports = { 
    entry: "./src/index.js", // основной файл приложения
    output:{ 
        path: __dirname+"/www", // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            {
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        publicPath: '/www/',
                      },
                    },
                    'css-loader',
                  ],
            }            
        ] 
    },
    plugins: [
        extractCSS
    ]
}