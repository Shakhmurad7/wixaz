import { Route, Router, Routes } from "react-router"
import Home from "./Page/Home/home"
import About from "./Page/About.jsx/about"

function App() {
  return (
    <>
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/about"  element={<About/>} />
        </Routes>
    </>
  )
}

export default App
