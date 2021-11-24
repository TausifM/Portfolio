import React, { useState } from "react";
import "./sidenav.css";
import { FaHamburger } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { SiWebpack } from "react-icons/si";
import { AiFillCloseSquare } from "react-icons/ai";
import { FaHome } from "react-icons/fa";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome className="icon" />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaUserFriends className="icon" />,
    cName: "nav-text",
  },
  {
    title: "Project",
    path: "/project",
    icon: <SiWebpack className="icon" />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <FaPhone className="icon" />,
    cName: "nav-text",
  },
];

function SideNavbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <div>
      <div className="navbar">
        <i>
          <FaHamburger onClick={showSidebar} alt="menu-btn" />
        </i>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <AiFillCloseSquare className="close-btn" />
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <a href={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default SideNavbar;
