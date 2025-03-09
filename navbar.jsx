import React from 'react';
import "./navbar.css";
import Logout from './logoutbtn.jsx';

export default function Navbar() {
    return (
        <>
           
            <div className="navbar"> 
            <div className="eduai">
                <h1>EduAI</h1>
            </div>

                <div className="navh1">
                    <h2>AI Education Assistant</h2>
                </div>

                <div className="navh2">
                    <h3>Welcome, varneeth@gmail.com</h3>
                </div>
                <div className="btn">
                    <Logout />
                </div>
            </div>
        </>
    );
}
