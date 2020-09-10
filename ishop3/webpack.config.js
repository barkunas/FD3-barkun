const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractCSS = new ExtractTextPlugin({
    filename: "bundle.css"
});
const outputPath = __dirname+'/dist'

module.exports = { 
    entry: "./src/index.js", // основной файл приложения
    output:{ 
        path: outputPath, // путь к каталогу выходных файлов
        filename: "bundle.js"  // название создаваемого файла 
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            { 
                test: /\.js$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ["css-loader"]
                })
            }            
        ] 
    },
    plugins: [
        extractCSS
    ]
}