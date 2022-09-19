const Sequelize = require("sequelize");

const sequelize = new Sequelize("postapp", "root", "@n1Mseguranza", {
  // nome banco, user, senha, local do host, tipo de banco
  host: "localhost",
  dialect: "mysql",
  query:{raw:true}
});

module.exports={
    Sequelize: Sequelize,
    sequelize:  sequelize
}