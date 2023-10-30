import React from 'react';

function Header() {
    return (
        <header>
            <div className="wrapper">
                <img src="img/logo.png" alt="" className="logo__img" />
                <nav>
                    <ul className="menu__list">
                        <li className="menu__list--item"><a href="" className="menu__list--link">Кто&nbsp;мы</a></li>
                        <li className="menu__list--item"><a href="" className="menu__list--link">Суть предложения</a></li>
                        <li className="menu__list--item"><a href="" className="menu__list--link">Для&nbsp;кого</a></li>
                        <li className="menu__list--item"><a href="" className="menu__list--link">Что&nbsp;даём</a></li>
                        <li className="menu__list--item"><a href="" className="menu__list--link">Кейсы</a></li>
                    </ul>
                    <div className="burger">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <button className="nav__button">Есть идея
                        <img src="img/idea.svg" alt="" />
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
