import React, { useContext } from "react";
import Logo from "../img/TS logo.png";
import SideNavbar from "./SideNavbar";
import { FaPhone } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { FaHome } from "react-icons/fa";
import "./header.css";
import { ThemeContext } from "../context";
const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <React.Fragment>
      <div className="h">
        <div className="h-left">
          <div className="h-left-wrapper">
            <img src={Logo} alt="" className="h-logo" />
          </div>
        </div>
        <div className="h-middle">
          <div className="h-middle-wrapper">
            <ul className="navlist">
              <li className="navlist-link">
                <a href="/">
                  <i>
                    <FaHome />
                  </i>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" style={{ color: darkMode && "white" }}>
                  <i>
                    <FaUserFriends />
                  </i>
                  About
                </a>
              </li>
              <li>
                <a href="/projects" style={{ color: darkMode && "white" }}>
                  <i>
                    <SiWebpack />
                  </i>
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" style={{ color: darkMode && "white" }}>
                  <i>
                    <FaPhone />
                  </i>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="h-right">
          <div className="h-right-wrapper">
            <SideNavbar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
