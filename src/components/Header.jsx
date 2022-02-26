import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import './Header.css'
function Header() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (<>
        <nav className="navbar">
            <div className="navbar-container">
                <a href="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Pat
                    <i className="fab fa-typo3"></i>
                </a>
                <div className="menu-icon"
                    onClick={handleClick}>
                    <i className={
                        click ? 'fas fa-times' : 'fas fa-bars'
                    } />
                </div>
                <ul className={
                    click ? "nav-menu active" : "nav-menu"
                }>
                    <li className='nav-item'>
                        <a href='#home' className='nav-links'
                            onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href="#projects" className='nav-links'
                            onClick={closeMobileMenu}>
                            Projects
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a
                            href='#skills' className='nav-links'
                            onClick={closeMobileMenu}>
                            Skills
                        </a>
                    </li>
                </ul>
                {
                    button && <Button buttonStyle='btn--outline'>About Me</Button>
                } </div>
        </nav>
    </>)
}

export default Header
