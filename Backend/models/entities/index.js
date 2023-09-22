
const sql = require("mysql2/promise")

const { Sequelize, DataTypes } = require('sequelize');
sql.
    createConnection({ user:"root", password: "" })

    .then(()=>

    {

        console.log("db CONNECTED successfully")

    })

const sequelize = new Sequelize(

    "notes",

    "root",

    "",    {

    host:"localhost",

    dialect: "mysql",

});

const db={}

db.sequelize=sequelize

db.user = require("../entities/data")(sequelize,DataTypes)

db.sequelize.sync({ force: false }).then(() => {

    console.log("re-sync done");
  
  });

// db.USER=require("../models/entity/user")(sequelize,DataTypes)

// db.PROJECT=require("../models/entity/project.js")(sequelize,DataTypes)

// db.EVENT=require("../models/entity/event.js")(sequelize,DataTypes)

// db.HOLIDAY=require("../models/entity/holiday.js")(sequelize,DataTypes)

