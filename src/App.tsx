import React from 'react'
import {  Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'

const App = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>}  />
        </Routes>
    </>
  )
}

export default App