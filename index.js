const express = require('express')
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
});


app.listen(8042, function(){console.log("server running!");});


// futuramente usar nestjs que usa TS
// Pacotes utilizados neste projeto:
// MYSQL2, NODEMON, NPM, EXPRESS
// template add users
// INSERT INTO usuarios(nome,email,idade)VALUES(
//    "Pictor Alphaville","criaboy@gmail.com",20
//);