import React , {useState} from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome, AiOutlineAppstore, AiOutlineClose } from "react-icons/ai";
import {
  FaUser,
  FaBriefcase,
  FaComment,
  FaBrain,
  FaListUl,
} from "react-icons/fa";
import "./header.css";
const Header = () => {
  const [toggle,showMenu] = useState(false);
  return (
    <header>
      <nav className="nav container">
        <NavLink to="/" className="nav-logo">
          Peter
        </NavLink>

        <div className={toggle?'nav-menu show-menu':'nav-menu'}>
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/" className="nav-link active-link">
                <AiFillHome className="nav-icon" />
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <FaUser className="nav-icon" />
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link">
                <FaBrain className="nav-icon" />
                skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/services" className="nav-link">
                <FaListUl className="nav-icon" />
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link">
                <FaBriefcase className="nav-icon" />
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                <FaComment className="nav-icon" />
                Contact
              </NavLink>
            </li>
          </ul>
          <AiOutlineClose className="nav-close" onClick={()=>showMenu(!toggle)}/>
        </div>
        <AiOutlineAppstore className="nav-toggle" onClick={()=>showMenu(!toggle)}/>
      </nav>
      
    </header>
  );
};

export default Header;
