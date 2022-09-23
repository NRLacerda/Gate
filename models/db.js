const Sequelize = require("sequelize");

const sequelize = new Sequelize("todolist", "root", "@n1Mseguranza", {
	// nome banco, user, senha, local do host, tipo de banco
	host: "localhost",
	dialect: "mysql",
	query: { raw: true },
});

module.exports = {
	Sequelize: Sequelize,
	sequelize: sequelize,
};
/*
CREATE TABLE lists( 
  id int primary key AUTO_INCREMENT,
  criticidade varchar(50),
  solicitante varchar(100),
  descricao varchar (200),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);*/
