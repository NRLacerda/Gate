const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/post")

//Config
//Template engine

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts", // puxa o html  "main"
  })
);
// Body Parser
app.use(express.urlencoded({extended:false})); //Parse URL-encoded bodies    
app.use(express.json()); //Used to parse JSON bodies//Conexão com o BD

// Rotas
// a rota Main deveria puxar as outras rotas automaticamente, por algum diabos de motivo nao esta, por isso tenho de usar varios arquivos pra puxar os layouts.
/*app.get('/', function(res){
        res.render('main', {layout : 'index'});
    })*/
    app.get("/caduser", function (req, res) {
        res.render("caduser");
    });
    app.post(`/add`, function (req, res) {
        Post.create({
            username:req.body.user,
            email:req.body.email,
            idade:req.body.idade
        }).then(function(){
            res.send("Usuário cadastrado com sucesso")
        }).catch(function(erro){
            res.send("Houve algum erro" + erro)
        })
   });

   app.listen(8181, function () {
    console.log("server running!");
  });


/* Tinha usado isso pra testar se estava funcionando antes.
   var username = req.body.user
   var email = req.body.email
   var idade = req.body.idade
   results.send("Usuário cadastro com nome " + username + " Email: "+ email + " de idade " + idade)

// futuramente usar nestjs que usa TS
// template add users
// INSERT INTO usuarios(nome,email,idade)VALUES(
// "Pictor Alphaville","criaboy@gmail.com",20
//);
*/