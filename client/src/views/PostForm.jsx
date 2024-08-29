import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createPost } from "../services/post.service";

const PostForm = () => {

    const [post, setPost] = useState({
        description : ''
    })

    const [error, setError] = useState({
        description : ''
    })

    const navigate = useNavigate()

    const validatePostAttribute = (name, value) => {
        const validations = {
            description : value => value.length >= 10 && value.length <= 255 ? true : 'Description must be between 10 and 255 characters.'
        }
        setError( prev => ( {...prev, [name] : validations[name](value)} ) )
    } 

    const changeHandler = e => {
        const {name, value} = e.target 
        setPost({...post, [name] : value})
        validatePostAttribute(name, value)
    }

    const readyToSubmit = () => {
        for (let key in error){
            if( error[key] !== true){
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
        createPost(post)
            .then(() => navigate('/dashboard'))
            .catch(err => console.log(err))
    }




    return(<>
        <header>
            <Link to={'/dashboard'}>Bright Ideas</Link>
            <Link to={'/'}>Logout</Link>

        </header>
        <form onSubmit={submitHandler}>
            <textarea 
                name='description'
                value={post.description}
                onChange={changeHandler}
                placeholder='Post something witty here'
                rows="7"
                cols="30"
            />
            {<p>{error.description}</p>}
            <input type='submit' value='Idea'/>
        </form>
    </>)
}

export default PostForm