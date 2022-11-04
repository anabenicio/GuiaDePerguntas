const express = require("express");
const app = express();

app.set('view engine','ejs'); // usar o ejs como redenrizador html

app.use(express.static('public')); // arquivos estáticos, CSS, Javascript static

app.get("/", (req, res)=>
{
    res.render("index");
});

app.get("/perguntar",(req,res)=>{
    res.render("perguntar.ejs");
});

app.listen(8080, ()=>{
    console.log("App rodando!");
});
