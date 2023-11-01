import React, { useState } from 'react';

function Header() {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

    const closeMenu = () => {
        setMenuActive(false);
    }
    return (
        <header>
            <div className="wrapper">
                <img src="img/logo.png" alt="" className="logo__img" />
                <nav>
                    <ul className={`menu__list ${menuActive ? 'active' : ''}`}>
                        <li className="menu__list--item"><a href="#we" className="menu__list--link" onClick={closeMenu}>Кто&nbsp;мы</a></li>
                        <li className="menu__list--item"><a href="#essence" className="menu__list--link" onClick={closeMenu}>Суть предложения</a></li>
                        <li className="menu__list--item"><a href="#suitable" className="menu__list--link" onClick={closeMenu}>Для&nbsp;кого</a></li>
                        <li className="menu__list--item"><a href="#give" className="menu__list--link" onClick={closeMenu}>Что&nbsp;даём</a></li>
                        <li className="menu__list--item"><a href="#case" className="menu__list--link" onClick={closeMenu}>Кейсы</a></li>
                    </ul>
                    <div className={`burger ${menuActive ? 'active' : ''}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <a href="#feedback" className={`nav__button ${menuActive ? 'active' : ''}`} onClick={closeMenu}>Есть идея
                        <img src="img/idea.svg" alt="" />
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default Header;
