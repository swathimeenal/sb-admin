import React,{useState} from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Class from './components/Class'
import User from './components/User'
import Query from './components/Query'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'

function App() {
  let [user,setUser] = useState([
  
    {
      id:1,
      name:"Swathi",
      email:"swathi@gmail.com",
      mobile:"7867867881",
      Batch:"B53"
     },
     {
      id:2,
      name:"Meenal",
      email:"meenal@gmail.com",
      mobile:"7867867882",
      Batch:"B53"
     },
     {
      id:3,
      name:"Nagarajan",
      email:"naga@gmail.com",
      mobile:"7867867883",
      Batch:"B53"
     },
     {
      id:4,
      name:"Velu",
      email:"velu@gmail.com",
      mobile:"7867867884",
      Batch:"B53"
     },
     {
      id:5,
      name:"Nachiyar",
      email:"nachiya@gmail.com",
      mobile:"7867867885",
      Batch:"B53"
     }
  ])

  return  <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user}  setUser={setUser}/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/add-user' element={<AddUser/>}/>
        <Route path='/edit-user/:id' element={<EditUser/>}/>                                               
        <Route path='/query' element={<Query/>}/>
        <Route path='*' element={<Navigate to='/dashboard'/>}/>
      </Routes>
    </BrowserRouter>

  </div>
}

export default App