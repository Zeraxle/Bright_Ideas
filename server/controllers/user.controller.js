import User from "../models/user.model.js";

export const findUserById = async (req ,res, next) => {
    
    try {
        const {id} = req.params
        const foundUser = await User.findByPk(id)
        res.status(200).json(foundUser)
    } catch (error){res.status(400).json(error) }
}

export const findAllUsers = async (req, res, next) => {
    
    try {
        const allUsers = await User.findAll()
        res.status(200).json(allUsers)
    } catch (error){res.status(400).json(error)}
}

export const createUser = async (req, res, next) => {

    try {
        const createdUser = await User.create(req.body)
        res.status(200).json(createdUser)
    } catch (error){res.status(400).json(error)}
}

export const updateUser = async (req, res, next) => {

    try {
        const {id} = req.params
        const updatedUser = req.body
        const foundUser = await User.findByPk(id)
        if(!foundUser){
            return res.status(400).json({message : 'No user found'})
        }
        foundUser.name = updatedUser.name
        foundUser.alias = updatedUser.alias
        foundUser.email = updatedUser.email
        await foundUser.save()
        res.status(200).json(foundUser)
    } catch (error){
        console.log(error)
        res.status(400).json(error)
    }
}

export const destroyUser = async (req, res, next) => {

    try {
        const {id} = req.params
        const destroyedUser = await User.destroy({
            where : {
                id : id
            }
        })
        res.status(200).json(destroyedUser)
    } catch (error){res.status(400).json(error)}
}