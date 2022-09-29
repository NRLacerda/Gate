const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/post");
const alert = require("alert");

function hash() {
	var crypto = require("crypto");
	var name = "@n1Mseguranza";
	var hash = crypto.createHash("md5").update(name).digest("hex");
	console.log(hash); // 9b74c9897bac770ffc029102a200c5de
}
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
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies

// Rotas
app.get("/todolist", function (req, res) {
	Post.findAll().then(function (list) {
		hash();
		// lista todos dados
		res.render("todolist", { list: list });
	});
});
app.get("/cadtodo", function (req, res) {
	res.render("cadtodo"); // Rota de cadastro de sol
});
app.post(`/add`, function (req, res) {
	Post.create({
		// Rota que puxa o Post.js para inserir dados no BD conforme status abaixo
		criticidade: req.body.criticidade, // ESSA é a referência, ele pega do body pra criar um dado
		solicitante: req.body.solicitante,
		descricao: req.body.descricao,
	})
		.then(function () {
			// e se não conseguir ele da erro
			alert("Solicitação feita com sucesso");
		})
		.catch(function (erro) {
			alert("Houve algum erro " + erro);
		});
});
app.get("/caduser", function(req,res){
	res.render("caduser");
})

/*

Infelizmente acho que cheguei no limite do handlebars
não tem como eu pegar variáveis do html, ou ao menos
não sei como, e sinceramente n vale mt tentar ver,
já que irei utilizar o Angular, mas foi uma boa tentativa
gostei bastante.


app.post("/cadusuario", function(req,res){
	Post.create({
		usuario:req.body.usuario,
		senha:req.body.criticidade,
	})
})
*/

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
