import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {dbConnect} from './config/config.sequelize.js'
import { userRouter } from './routes/user.route.js'
import { postRouter } from './routes/post.route.js'
import { likeRouter } from './routes/like.route.js'


const app = express()
app.use(express.json(), cors())
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/like', likeRouter)

dotenv.config()

const PORT = process.env.PORT
dbConnect()

app.listen(PORT, () => (console.log(`listening on PORT: ${PORT}`)))
