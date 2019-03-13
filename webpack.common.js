var HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");//no need to install path(built in node)
module.exports={
    //devtool:"none"(put only when you want to remove eval statements from main.js)
    entry:"./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template:path.join(__dirname+"/landing.html")
    })],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            }
        ]
    }
};