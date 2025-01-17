import React from 'react';
import Navbar from './Navbar';
import { Link } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      {/* Navbar Section */}
      
      <div className="row">
        <Navbar />
      </div>

      {/* Main Layout */}
      <div className="row ">
        {/* Sidebar */}
        <div className="col-sm-2 sidebar pt-5">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/">View</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/user">Tutorial Tie-Toc-Toe</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Thinking In React</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/installation">Installation</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/uipage">Describing The UI</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adding">Adding Interactivity</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/managing">Managing State</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/escape">Escape Hatches</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/overview">Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/style">Adding Styles</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/display">Display Data</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/con">Conditional Rendering</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/res">Responding to Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/respond">Responding to Lists</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">Updating The Screen</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hooks">Using Hooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sharing">Sharing Data</Link>
            </li> 
            <li className="nav-item">
              <Link className="nav-link" to="/props">Sharing Data with props</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-sm-10 content p-5">
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout



