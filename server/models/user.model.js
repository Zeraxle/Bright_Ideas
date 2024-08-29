import { DataTypes } from "sequelize"
import { sequelize } from "../config/config.sequelize.js"
// import useBcrypt from 'sequelize-bcrypt'



const User = sequelize.define('user', {
    id : {
        autoIncrement : true,
        type : DataTypes.BIGINT,
        allowNull : false,
        primaryKey : true
    },

    name : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            len : [2,25]
        }
    },

    alias : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            len : [2, 25]
        }
    },

    email : {
        type : DataTypes.STRING,
        unique : true,
        allowNull : false,
        validate : {
            isEmail : true,
            
        }
    },

    password : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            len : [8, 30]
        }
    },

    createdAt : { type : DataTypes.DATE},

    updatedAt : {type : DataTypes.DATE}
    
}, { timestamps : true}
) 

User.sync({alter: true})
    .then(console.log("User table created!!"))
    .catch(error => console.log("User table creation error : ",  error))

export default User