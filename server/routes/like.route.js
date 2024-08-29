import { Router} from 'express'
import { findLike, findAllLikes, createLike, destroyLike } from '../controllers/like.controller.js'

export const likeRouter = Router()

    likeRouter.route('/')
        .get(findAllLikes)

    likeRouter.route('/create')
        .post(createLike)

    likeRouter.route('/:id')
        .get(findLike)
        .delete(destroyLike)