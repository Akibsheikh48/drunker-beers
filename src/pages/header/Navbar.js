import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import FastfoodIcon from '@material-ui/icons/Fastfood';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closemobileMenu = () => setClick(false);

  const showButon = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButon();
  }, []);

  window.addEventListener("resize", showButon);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <div className="navbar_container container">
          <div  className="navbar_logo" onClick={closemobileMenu}>
            <FastfoodIcon className="navbar_icon" />
            Drunker
          </div>
          <div className="menu_icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav_menu active" : "nav_menu"}>
            <li className="nav_item">
              <div  className="nav_links" onClick={closemobileMenu}>
                Home
              </div>
            </li>
            <li className="nav_item">
              <div
                
                className="nav_links"
                onClick={closemobileMenu}
              >
                Beers
              </div>
            </li>
            <li className="nav_item">
              <div
                
                className="nav_links"
                onClick={closemobileMenu}
              >
                Wine
              </div>
            </li>
            <li className="nav_item">
              <div
                
                className="nav_links"
                onClick={closemobileMenu}
              >
                Rum
              </div>
            </li>
            <li className="nav_item">
              <div
                
                className="nav_links"
                onClick={closemobileMenu}
              >
                Coctail
              </div>
            </li>
            
           
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Navbar;
