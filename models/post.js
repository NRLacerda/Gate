const db = require("./db")

const Post =db.sequelize.define(`list`,{
    criticidade:{
        type:db.Sequelize.STRING
    },
    solicitante:{
        type:db.Sequelize.STRING
    },
    descricao:{
        type:db.Sequelize.STRING
    }
})

// isso aqui cria o banco de dados, apenas executado na primeira vez Post.sync({force:true})
module.exports = Post
