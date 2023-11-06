import React from 'react'
import Signup from "./components/Signup/login.jsx";
import Home from './components/Home/Home.jsx';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';
import NavBar from './components/Home/NavBar.jsx';
import Footer from './components/Home/Footer.jsx';
import About from './components/Home/About.jsx';
import Login from './components/Login/index.jsx';


export default function App() {
  return (
    <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  )
}
