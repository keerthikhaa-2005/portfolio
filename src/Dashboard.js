import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <nav className="Dashboard">
            <h1>My Portfolio</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Dashboard;