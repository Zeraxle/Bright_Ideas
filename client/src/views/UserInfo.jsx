import React, { useState, useEffect } from "react";
import { useNavigate, Link} from 'react-router-dom'
import { findUserById } from "../services/user.service";


export const UserInfo = () => {

    const [user, setUser] = useState({})

    useEffect(() => {
        findUserById(id)
        .then(res => setUser(res))
        .catch(err => (console.log(err)))
    }, [])



    return(<>
        <header>
            <Link to={'/dashboard'}>Bright Ideas</Link>
            <Link to={'/'}>Logout</Link>
        </header>
        <main>
            <p>{user.name}</p>
            <p>{user.alias}</p>
            <p>{user.email}</p>
        </main>
    </>)
}