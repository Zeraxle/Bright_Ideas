import axios from "axios";

const POST_INSTANCE = axios.create({
    baseURL : 'http://localhost:8000/post'
})

export const findPost = async (id) => {
    try {
        const res = await POST_INSTANCE.get(`/${id}`)
        return res.data
    } catch(error) {throw error}
}

export const findAllPosts = async () => {
    try {
        const res = await POST_INSTANCE.get('/')
        return res.data
    } catch(error) {throw error}
}

export const createPost = async (postData) => {
    try {
        const res = await POST_INSTANCE.post('/create', postData)
        return res.data
    } catch(error) {throw error}
}

export const updatePost = async (postData) => {
    try {
        const res = await POST_INSTANCE.put(`/${postData.id}`, postData)
        return res.data
    } catch(error) {throw error}
}

export const destroyPost = async (id) => {
    try {
        const res = await POST_INSTANCE.delete(`/${id}`)
        return res.data
    } catch(error) {throw error}
}