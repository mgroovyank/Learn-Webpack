var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server ready to go!");
});