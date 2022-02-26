import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Column 1</h2>
                        <Link to='/sign-up'>Bing</Link>
                        <Link to='/'>Bong</Link>
                        <Link to='/'>Cars</Link>
                        <Link to='/'>Bars</Link>
                        <Link to='/'>Tesla</Link>
                    </div>
                    <div className="footer-link-wrapper">
                        <div className="footer-link-items">
                            <h2> Column 2 </h2>
                            <Link to='/sign-up'>Sing</Link>
                            <Link to='/'>Song</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            Pat <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <div className="social-icons">
                        <Link className="social-icon-link linkedin" to="/" target="_blank" aria-label='Linkedin'>
                            <i className="fab fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer