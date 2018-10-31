const Sequelize= require('sequelize');

const db= new Sequelize('userdb','root','siddharth',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
})

const Users= db.define('users',{
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
        },
    password: {
            type: Sequelize.STRING,
            allowNull: true,
        },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING
})

db.sync()
.then(()=>console.log("Database has been synced"))
.catch((err)=>console.error("Error syncing database!"))

exports=module.exports={
   db, Users
}