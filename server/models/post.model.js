import { DataTypes } from "sequelize";
import { sequelize } from "../config/config.sequelize.js";

const Post =  sequelize.define('post', {

    id : {
        autoIncrement : true,
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false
    },

    description : {
        type : DataTypes.STRING,
        allowNull : false,
        len : [10, 255]
    },

    createdAt : {type : DataTypes.DATE},

    updatedAt : {type : DataTypes.DATE}

}, {timestamps : true}
)

Post.sync({alter : true})
    .then(console.log('Post table created'))
    .catch(error => console.log(`Failed to create Post table, ${error}`))

export default Post