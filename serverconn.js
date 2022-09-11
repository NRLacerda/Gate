const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', '123456', {
        host:"localhost",
        dialect:'mysql'
})

sequelize.authenticate().then(function(){ // ao se conectar "then"> mostra mensagens, de erro ou sucesso
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao conectar com o DB"+ erro)
})