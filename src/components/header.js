import React from 'react';
import {NavLink} from "react-router-dom";
import Logo from '/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/images/Logo-Black (3).png'
// import About from "/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/components/about.js"
// import Contact from "/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/components/contact.js"
// import Projects from "/Users/joseperez/Desktop/portfolio-new/portfolio-new/src/components/projects.js"

const Header = () => {
  return (<div className="row">

    {/* Begin nav bar */}
    <nav className="navbar navbar-expand-md col-md-12 d-flex row justify-content-between">
      <div className=" row align-items-center">
        <img className=" logo m-4" src={Logo} alt="Logo"/>
        <h4>Jose Rodolfo</h4>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="About">About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Projects">Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="Contact">Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    {/* ^^End side bar */}

  </div>)
}

export default Header
