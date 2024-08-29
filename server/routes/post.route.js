import { Router } from "express";
import { findPost, findAllPosts, createPost, updatePost, destroyPost } from "../controllers/post.controller.js";

export const postRouter = Router()

    postRouter.route('/')
        .get(findAllPosts)

    postRouter.route('/create')
        .post(createPost)

    postRouter.route('/:id')
        .get(findPost)
        .put(updatePost)
        .delete(destroyPost)
