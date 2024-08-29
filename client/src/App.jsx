import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { LoginRegistrationForm } from './views/LoginRegistrationForm'
import { Dashboard } from './views/Dashboard'
import { PostInfo } from './views/PostInfo'
import { UserInfo } from './views/UserInfo'
import './App.css'
import PostForm from './views/PostForm'

function App() {

    const [posts, setPosts] = useState([])

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginRegistrationForm/> }/>
        <Route path='/dashboard' element={<Dashboard posts={posts} setPosts={setPosts}/> }/>
        <Route path='post/form' element={<PostForm/>}/>
        <Route path='/post/info/:id' element={<PostInfo/> }/>
        <Route path='/user/info/:id' element={<UserInfo/> }/>
      </Routes>
    </>
  )
}

export default App
