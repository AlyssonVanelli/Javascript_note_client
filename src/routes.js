import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './screens/home';
import Register from './screens/auth/register'
import Login from './screens/auth/login'
import NotesIndex from './screens/notes/index'
import UserEdit from './screens/users/edit'

const Rota = () => (
 <Router>
  <Routes>
   <Route exact path='/' element={<Home/>} />
   <Route exact path='/register' element={<Register/>} />
   <Route exact path='/login' element={<Login/>} />
   <Route exact path='/notes' element={<NotesIndex/>} />
   <Route exact path='/users/edit' element={<UserEdit/>} />
  </Routes>
 </Router>
)

export default Rota;
