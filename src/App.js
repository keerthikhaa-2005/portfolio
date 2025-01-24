import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <nav className="navbar">
                    <h1 className="navbar-title">KEERTHIKHAA's Portfolio</h1>
                    <div className="links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/skills">Skills</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;