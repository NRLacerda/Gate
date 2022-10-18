const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const Post = require("./models/post");
const alert = require("alert");


// faz o hash de uma senha que vc inserir em "name"
function hash() {
	var crypto = require("crypto");
	var name = "@n1Mseguranza";
	var hash = crypto.createHash("md5").update(name).digest("hex");
	console.log("Senha random hasheada "+ hash); // 
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
app.get("/todolist", function (req,res) {
	Post.findAll().then(function (list) {
		// lista todos dados
		res.render("todolist", { list: list });
	});
});
app.get("/cadtodo", function (req,res) {
	res.render("cadtodo"); // Rota de cadastro de sol
});
app.post(`/add`, function (req,res) {
	Post.create({
		// Rota que puxa o Post.js para inserir dados no BD conforme status abaixo
		criticidade : req.body.criticidade, // ESSA é a referência, ele pega do body pra criar um dado
		solicitante : req.body.solicitante,
		descricao: req.body.descricao,
	})
		.catch(function (erro) {
			alert("Houve algum erro " + erro);
		});
});

app.delete('/delpost', function(req,res){
	res.render("caduser");
})
/*app.delete("delpost", function (req,res){
	Post.delete({
		
	})
app.get("/caduser", function(req,res){
	res.render("caduser");
})

/*
app.post("/cadusuario", function(req,res){
	Post.create({
		usuario:req.body.usuario,
		senha:req.body.criticidade,
	})
})
*/

app.listen(80, function () {
	console.log("server running!");
});

// futuramente usar nestjs que usa TS
// template add users
// INSERT INTO usuarios(nome,email,idade)VALUES(
// "Pictor Alphaville","criaboy@gmail.com",20*/
