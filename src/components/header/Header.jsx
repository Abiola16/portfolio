import React, { useState } from 'react';
import "./header.css";
import { Home,  User, FileBarChart, Briefcase, FileImage, SendHorizontal, X, LayoutGrid } from 'lucide-react';

export const Header = () => {
     /* =====================CHANGE BACKGROUND HEADER==================== */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header")
        if (this.scrollY >= 80) header.classList.add("show-header")
        else header.classList.remove("show-header");
    });
     /* =====================TOGGLE-MENU==================== */
  const[Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
   <div className="header">
        <div className="nav container">
            <a href="index.html" className='nav__logo'>Mujeeb</a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"} >
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-estate nav__icon"><Home /></i>Home
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-user nav__icon"><User /></i>About
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-file-alt nav__icon"><FileBarChart /></i>Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-briefcase-alt nav__icon"><Briefcase /></i>Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil-scenery nav__icon"><FileImage /></i>Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav-link active-link" : "nav-link"}>
                            <i className="uil uil- nav__icon"><SendHorizontal /></i>Contact
                        </a>
                    </li>
                    
                </ul>

                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}><X /></i>
            </div>
            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"><LayoutGrid /></i>
            </div>
        </div>
   </div>
  );
};
export default Header;
