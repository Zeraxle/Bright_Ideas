import axios from "axios";

const LIKE_INSTANCE = axios.create({
    baseURL : "http://localhost:8000/like"
})

export const findLike = async (id) => {
    try {
        const res = await LIKE_INSTANCE.get(`/${id}`)
        return res.data
    } catch(error) {throw error}
}

export const findAllLikes = async () => {
    try {
        const res = await LIKE_INSTANCE.get('/')
        return res.data
    } catch(error) {throw error}
}

export const createLike = async (likeData) => {
    try {
        const res = await LIKE_INSTANCE.post('/create', likeData)
        return res.data
    } catch(error) {throw error}
}

export const destroyLike = async (id) => {
    try {
        const res = await LIKE_INSTANCE.delete(`/${id}`)
        return res.data
    } catch(error) {throw error}
}