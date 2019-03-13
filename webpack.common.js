var HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");//no need to install path(built in node)
module.exports={
    //devtool:"none"(put only when you want to remove eval statements from main.js)
    entry:{
        main:"./src/index.js",
        vendor:"./src/vendor.js"
    },
    plugins: [new HtmlWebpackPlugin({
        template:path.join(__dirname+"/landing.html")
    })],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.html$/,
                use:["html-loader"]
            },
            {
                test:/\.(svg|png|jpg|gif)$/,
                use:{
                    loader:"file-loader",
                    options:{
                        name:"[name].[hash].[ext]",
                        outputPath:"imgs"
                    }
                }
            }
        ]
    }
};