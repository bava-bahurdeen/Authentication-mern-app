import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import "./index.css"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Signin from "./pages/Sign-in"
import Signup from "./pages/Sign-up"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Sign-in" element={<Signin/>}/> 
         <Route path="/Sign-up" element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
  )
}
