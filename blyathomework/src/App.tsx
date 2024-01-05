import './App.css'
import Login from "./Pages/LoginPage/Login"
import Home from "./Pages/HomePage/Home"
import About from "./Pages/AboutPage/About"
import Navbar from "./Navbar"
import {Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
       <Routes>
       <Route path="/" element={<Home/>}/>  
       <Route path="/login" element={<Login/>}/>  
       <Route path="/about" element={<About/>}/>  
       </Routes>  
      </div>
    </>
  )
}

export default App
