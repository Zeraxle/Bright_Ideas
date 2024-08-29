import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { findAllPosts } from "../services/post.service";


export const Dashboard = (props) => {

    // const {posts, setPosts} = props
    const [posts, setPosts] = useState([])
    

    useEffect(() => {
        findAllPosts()
        .then(res => setPosts(res))
        .catch(err => console.log(err))
    }, [])

    
    return (<>
        <header>
            <Link to={'/post/form'}>Have an Idea?</Link>
            <Link to={'/'}>Logout</Link>
        </header>
        <main>
            { 
                posts.map(post => (
                    <div key={post.id}>
                        <textarea 
                            defaultValue={post.description}
                            rows="7"
                            cols="30"
                        />
                        <Link to={`/post/info/${post.id}`}>Update</Link>
                    </div>
                ))
            }
        </main>
    </>)
}