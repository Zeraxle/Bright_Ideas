import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { findPost, updatePost, destroyPost } from "../services/post.service";

export const PostInfo = () => {

    const [post, setPost] = useState({})
    const {id} = useParams()
    const [errors, setErrors] = useState({
        description : ''
    })
    
    const navigate = useNavigate()

    useEffect(() => {
        findPost(id)
        .then(res => setPost(res))
        .catch(err => console.log(err))
    }, [])

    const validatePostAttribute = (name, value) => {
        const validations = {
            description : value => value.length >= 10 && value.length <= 255 ? true : 'Description must be between 10 and 255 characters.'
        }
        setErrors( prev => ( {...prev, [name] : validations[name](value)} ) )
    }

    const changeHandler = e => {
        const {name, value} = e.target 
        setPost({...post, [name] : value})
        validatePostAttribute(name, value)
    }

    const readyToSubmit = () => {
        for (let key in errors){
            if( errors[key] !== true){
                return false
            }
        }
        return true
    }

    const submitHandler = e => {
        e.preventDefault()
        if(!readyToSubmit()){
            alert('Please fill out form correctly')
            return
        }
        updatePost(post)
            .then(() => navigate('/dashboard'))
            .catch(err => console.log(err))
    }

    const deleteHandler = () => {
        destroyPost(id)
        .then(() => navigate('/dashboard'))
        .catch(err => console.log(err))
    }

    return (<>
        <header>
            <Link to={`/dashboard`}>Bright Ideas</Link>
            <Link to={'/'}>Logout</Link>
        </header>
        <form onSubmit={submitHandler}>
            <textarea
                name='description'
                value={post.description}
                onChange={changeHandler}
            />
            {<p>{errors.description}</p>}
            <input type="submit" value="Update" />
        </form>
        <button onClick={deleteHandler}>Delete</button>
    </>)
}