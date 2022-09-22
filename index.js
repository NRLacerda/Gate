const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/post")

//Config
// Handlebars, carrega os "html"

app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  handlebars.engine({
    layoutsDir: __dirname + "/views/layouts", // puxa o html  "main", que invoca em cadeia
  })
);
// Body Parser
app.use(express.urlencoded({extended:false})); //Parse URL-encoded bodies    
app.use(express.json()); //Used to parse JSON bodies

// Rotas
    app.get("/todolist", function(req,res){
      Post.findAll().then(function(list){ // lista todos dados
      console.log(list)
      res.render("todolist" ,{list:list})
      })
    })
    app.get("/cadtodo", function (req, res) {
        res.render("cadtodo"); // Rota de cadastro de sol
    });
    app.post(`/add`, function (req, res) {
        Post.create({ // Rota que puxa o Post.js para inserir dados no BD conforme status abaixo
            criticidade:req.body.criticidade, // ESSA é a referência, ele pega do body pra criar um dado
            solicitante:req.body.solicitante,
            descricao:req.body.descricao
        }).then(function(){// e se não conseguir ele da erro
            res.send("Solicitação feita com sucesso")
        }).catch(function(erro){
            res.send("Houve algum erro " + erro)
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
// "Pictor Alphaville","criaboy@gmail.com",20*/