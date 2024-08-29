import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUser } from '../services/user.service'

export const LoginRegistrationForm = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({
        name : '',
        alias : '',
        email : '',
        password : '',
        confirmPassword : ''
    })

    const [errors, setErrors] = useState({
        name : '',
        alias : '',
        email : '', 
        password : '',
        confirmPassword : ''
    })

    const validateUserAttribute = (name, value) => {
        const validations = {
            name : value => value.length >= 2 && value.length <= 25 ? true : 'Name must be between 2 and 25 characters.',
            alias : value => value.length >= 2 && value.length <= 25 ? true : 'Alias must be between 2 and 25 characters.',
            email : value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : 'Please enter a valid email.',
            password : value => value.length >= 8 && value.length <= 50 ? true : "Password must be at least eight characters and less than fifty characters long.",
            confirmPassword : (value) => {
                if( name == "confirmPassword" ){ return user.password === value ? true : "Your passwords do not match." }
                if( name == "password" ){ return user.confirmPassword === value ? true : "Your passwords do not match." }}
            }
            if ( name == "password" ){ setErrors( prev => ( {...prev, confirmPassword : validations["confirmPassword"](value)} ) ) }
                setErrors( prev => ( {...prev, [name] : validations[name](value)} ) )
        }
        

    const changeHandler = e => {
        const {name, value} = e.target 
        setUser({...user, [name] : value})
        validateUserAttribute(name, value)
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
        createUser(user)
            .then(() => navigate('/dashboard'))
            .catch(err => console.log(err))
    }

    const loginHandler = e => {
        e.preventDefault()
        navigate('/dashboard')
    }

    return (<>

        <header>
            <p>Welcome</p>
        </header>
        <main>
            <div>
                <p>Registration</p>
                <form onSubmit={submitHandler}>
                    <label>
                        Name :
                        <input 
                            type='text'
                            name='name'
                            value={user.name}
                            onChange={changeHandler}
                        />
                        {<p>{errors.name}</p>}
                    </label>
                    <label>
                        Alias :
                        <input 
                            type='text'
                            name='alias'
                            value={user.alias}
                            onChange={changeHandler}
                        />
                        {<p>{errors.alias}</p>}
                    </label>
                    <label>
                        Email :
                        <input 
                            type='email'
                            name='email'
                            value={user.email}
                            onChange={changeHandler}
                        />
                        {<p>{errors.email}</p>}
                    </label>
                    <label>
                        Password :
                        <input 
                            type='text'
                            name='password'
                            value={user.password}
                            onChange={changeHandler}
                        />
                        {<p>{errors.password}</p>}
                    </label>
                    <label>
                        Confirm Password :
                        <input 
                            type='text'
                            name='confirmPassword'
                            value={user.confirmPassword}
                            onChange={changeHandler}
                        />
                        {<p>{errors.confirmPassword}</p>}
                    </label>
                    <input type="submit" value="Register"/>
                </form>
            </div>
            <div>
                <p>Login</p>
                <form onSubmit={loginHandler}>
                    <label>
                        Email :
                        <input 
                            type='email'
                            name='email'
                            
                            
                        />
                    </label>
                    <label>
                        Password :
                        <input 
                            type='text'
                            name='password'
                            
                            
                        />
                    </label>
                    <input type="submit" value="Login" />
                </form>
            </div>
        </main>
    </>)
} 