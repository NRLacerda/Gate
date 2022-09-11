const express = require('express'); 
const app = express()
const handlebars = require('express-handlebars')

//Config
    //Template engine

app.set("view engine", "handlebars");
app.engine('handlebars', handlebars.engine({
    layoutsDir: __dirname + '/views/layouts', // puxa o html  "main"
}));

    //Conexão com o BD
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sistemadecadastro', 'root', '123456', { // nome banco, user, senha, local do host, tipo de banco
        host:"localhost",
        dialect:'mysql'
})
    // Rotas
    // a rota Main deveria puxar as outras rotas automaticamente, por algum diabos de motivo nao esta, por isso tenho de usar varios arquivos pra puxar os layouts.
    app.get('/', function(req,res){
        res.render('main', {layout : 'index'});
    })
    app.get('/caduser', function(req, res){
        res.render('caduser', {layout:'caduser'})
    })


app.listen(8045, function(){console.log("server running!");});


// futuramente usar nestjs que usa TS
// template add users
// INSERT INTO usuarios(nome,email,idade)VALUES(
//    "Pictor Alphaville","criaboy@gmail.com",20
//);