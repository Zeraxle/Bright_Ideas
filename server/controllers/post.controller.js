import Post from "../models/post.model.js";


export const findPost = async (req, res, next) => {

    try {
        const {id} = req.params
        const foundPost = await Post.findByPk(id)
        res.status(200).json(foundPost)
    } catch(error) {res.status(400).json(error)}
}

export const findAllPosts = async (req, res, next) => {

    try {
        const allPosts = await Post.findAll()
        res.status(200).json(allPosts)
    } catch(error) {res.status(400).json(error)}
}

export const createPost = async (req, res, next) => {

    try {
        const createdPost = await Post.create(req.body)
        res.status(200).json(createdPost)
    } catch(error){res.status(400).json(error)}
}

export const updatePost = async (req, res, next) => {

    try {
        const {id} = req.params
        const updatedPost = req.body
        const foundPost = await Post.findByPk(id)
        if(!foundPost) {
            return res.status(400).json({message : 'No post found'})
        }
        foundPost.description = updatedPost.description
        await foundPost.save()
        res.status(200).json(foundPost)
    } catch(error){res.status(400).json(error)}
}

export const destroyPost = async (req, res, next) => {

    try {
        const {id} = req.params
        const destroyedPost = await Post.destroy({
            where : {id : id}
        })
        res.status(200).json(destroyedPost)
    } catch(error){res.status(400).json(error)}
}