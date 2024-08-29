import axios from "axios";

const USER_INSTANCE = axios.create({
    baseURL : "http://localhost:8000/user"
})

export const findUserById = async (id) => {
    try {
        const res = await USER_INSTANCE.get(`/${id}`)
        return res.data
    } catch(error) {throw error}
}

export const findAllUsers = async () => {
    try {
        const res = await USER_INSTANCE.get('/')
        return res.data
    } catch(error) {throw error}
}

export const createUser = async (userData) => {
    try {
        const res = await USER_INSTANCE.post('/create', userData)
        return res.data
    } catch(error) {throw error}
}

export const updateUser = async (userData) => {
    try {
        const res = await USER_INSTANCE.put(`/${userData.id}`, userData)
        return res.data
    } catch(error) {throw error}
}