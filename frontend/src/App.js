import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap.css";
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from "react-bootstrap/Navbar"
import Nav from 'react-bootstrap/Nav'
import Container from "react-bootstrap/Container"
import Signup from './components/Auth/Signup'
import Signin from './components/Auth/Signin'
import Home from './components/Home/home'
import Logout from './components/Auth/logout';
import ViewNews from './components/News/view_news'
import Viewarticles from './components/articles/view_articles';



function App() {
  return (
    <Router>
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
              <Routes>
                <Route exact path="/" element={<Signin />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/home" element={<Home />} />
                <Route path="/news-view" element={<ViewNews />} />
                <Route path='/articles-view' element={<Viewarticles/>}/>
                <Route path="/logout" element={<Logout />}/>
              </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App
