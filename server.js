const express = require("express");
const app = express();
app.get("/",function(request,response){
    response.send("<h1>hey folks!</h1>")
    console.log(request);
});
app.listen(300,function(){
    console.log("server started on port 3000");
});