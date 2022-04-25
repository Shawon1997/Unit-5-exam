//import { useState } from 'react'
//import logo from './logo.svg'
import {Routes,Route} from "react-router-dom"
import './App.css'
import { Navbar } from './components/Navbar'
import {EmployeeList} from "./components/EmployeeList"
import {Home} from "./components/Home"
import { EmployeeDetails } from "./components/EmployeeDetails"
import { Admin } from "./components/Admin"
import{Login} from "./components/Login"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Navbar/>
      <Routes>
      
        <Route path="/" element={<Home/>}></Route>
        <Route path="/employees" element={<EmployeeList/>}></Route>
        <Route path="/employees/:id" element={<EmployeeDetails/>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        
      </Routes>
    </div>
  )
}

export default App
