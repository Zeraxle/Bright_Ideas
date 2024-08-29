import Like from "../models/like.model.js";

export const findLike = async (req, res, next) => {

    try {
        const {id} = req.params
        const foundLike = await Like.findByPk(id)
        res.status(200).json(foundLike)
    } catch(error){res.status(400).json(error)}
}

export const findAllLikes = async (req, res, next) => {

    try {
        const allLikes = await Like.findAll()
        res.status(200).json(allLikes)
    } catch(error){res.status(400).json(error)}
}

export const createLike = async (req, res, next) => {

    try {
        const createdLike = await Like.create(req.body)
        res.status(200).json(createdLike)
    } catch(error){res.status(400).json(error)}
}

export const destroyLike = async (req, res, next) => {

    try {
        const {id} = req.params
        const destroyedLike = await Like.destroy({
            where : {id : id}
        })
        res.status(200).json(destroyedLike)
    } catch(error){res.status(400).json(error)}
}