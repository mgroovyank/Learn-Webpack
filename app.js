var express=require("express");
var path=require("path");
var app=express();
app.use(express.static(__dirname));

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server ready to go!");
});