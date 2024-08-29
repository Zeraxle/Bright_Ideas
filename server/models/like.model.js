import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/config.sequelize.js";

const Like = sequelize.define('like', {

    id : {
        autoIncrement : true,
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false
    },

    createdAt : {type : DataTypes.DATE},

    updatedAt : {type : DataTypes.DATE}

    
}, {timestamps : true})

Like.sync({alter : true})
    .then(console.log('Like table created'))
    .catch(error => console.log(`Like table creation failed, ${error}`))

export default Like