import { Router } from "express";
import { findUserById, findAllUsers, createUser, updateUser, destroyUser } from "../controllers/user.controller.js";

export const userRouter = Router()

    userRouter.route('/')
        .get(findAllUsers)

    userRouter.route('/create')
        .post(createUser)

    userRouter.route('/:id')
        .get(findUserById)
        .put(updateUser)
        .delete(destroyUser)