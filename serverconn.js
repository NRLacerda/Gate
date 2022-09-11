const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '123456', { // nome banco, user, senha, local do host, tipo de banco
        host:"localhost",
        dialect:'mysql'
})
sequelize.authenticate().then(function(){ // ao se conectar "then"> mostra mensagens, de erro ou sucesso
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar com o DB"+ erro)
})

const Produtos = sequelize.define('Produtos',{
        productname:{
            type:Sequelize.STRING
        },
        productID:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        productWeight:{
            type:Sequelize.STRING
        }
})

const Usuarios = sequelize.define('usuarios',{
    nome:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    idade:{
        type:Sequelize.INTEGER
    }
})

Usuarios.create({
    nome: "Testenilson",
    email:"teste@gmail.com",
    idade:15
})


/*

- Coloca itens na tabela através do Sequelize

Produtos.create({
    productname: "Vinho Tinto Seco Daroça",
    productWeight:"1L"
})

- Serve pra criar a tabela usando sequelize, não descomentar isto.

Produtos.sync({force:true}) 

- Ao se conectar "then"> mostra mensagens, de erro ou sucesso

sequelize.authenticate().then(function(){  
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar com o DB"+ erro)
})
*/