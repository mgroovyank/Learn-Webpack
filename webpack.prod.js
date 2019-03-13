const path=require("path");//no need to install path(built in node)
const common=require("./webpack.common");
const merge=require("webpack-merge");
const cleanWebpackPlugin=require("clean-webpack-plugin");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
module.exports=merge(common,{
    mode:"production",
    //devtool:"none"(put only when you want to remove eval statements from main.js)
    output:{
        filename:"[name].[contentHash].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[new MiniCssExtractPlugin({filename:"[name].[contentHash].css"}),
    new cleanWebpackPlugin()],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                    ]
            }
            ]
    }
    
});