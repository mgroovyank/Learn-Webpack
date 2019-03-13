const path=require("path");//no need to install path(built in node)
const common=require("./webpack.common");
const merge=require("webpack-merge");
module.exports=merge(common,{
    mode:"development",
    //devtool:"none"(put only when you want to remove eval statements from main.js)
    output:{
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    }
});