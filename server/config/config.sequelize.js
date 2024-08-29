import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

export const sequelize = new Sequelize (
    'bright_ideas',
    'root',
    'root',
    {
        host : '127.0.0.1',
        dialect : 'mysql',
        port : 3306
    }
)
dotenv.config()


export const dbConnect = () => {
    sequelize.authenticate()
    .then(console.log('Connected to the DB'))
    .catch(error => console.log(`Failed to connect to the DB, ${error}`))
}