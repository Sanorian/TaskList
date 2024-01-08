const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/styles", (req, res)=>{
    res.sendFile(__dirname+"/styles.css");
});
app.get("/script", (req, res)=>{
    res.sendFile(__dirname+"/app.js");
});

app.listen(8080, function(err){
    if (err) throw err;
})