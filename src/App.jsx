import React from "react"
import Register from "./Pages/Register"
import { Route,Routes } from "react-router-dom"
import Log from "./Pages/Log"
import Homes from "./Pages/Homes"
function App() {

  return (
   <>
  <Routes>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/login" element={<Log/>}></Route>
    <Route path="/" element={<Homes/>}></Route>
  </Routes>
   </>
  )
}

export default App
