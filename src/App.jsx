import { Route, Router, Routes } from "react-router"
import Home from "./Page/Home/home"
import About from "./Page/About.jsx/about"
import Login from "./Page/Login/login"

function App() {
  return (
    <>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about"  element={<About/>} />
            <Route path="/login"  element={<Login/>} />
        </Routes>
    </>
  )
}

export default App
