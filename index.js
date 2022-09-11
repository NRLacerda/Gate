const Sequelize = require('sequelize')
const sequelize = new Sequelize('Usuarios', 'root', '123456', {
        host:"localhost"
        dialect:'mysql'
})


const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});


app.listen(8042, function(){console.log("server running!");});


// nestjs
// nodemon express

//INSERT INTO usuarios(nome,email,idade)VALUES(
//    "Pictor Alphaville","criaboy@gmail.com",20
//);