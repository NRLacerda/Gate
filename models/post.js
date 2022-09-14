const db = require("./db")

const Post =db.sequelize.define(`postagens`,{
    username:{
        type:db.Sequelize.STRING
    },
    email:{
        type:db.Sequelize.STRING
    },
    idade:{
        type:db.Sequelize.INTEGER
    }
})

// isso aqui cria o banco de dados, apenas executado na primeira vez Post.sync({force:true})
module.exports = Post