import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Aryan</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
                
            </ul>
            <div className="footer__social">
            <a href="" className="home__social-icon" target="blank">
            <i className="bx bxl-instagram"></i>
            </a>

            <a href="" className="home__social-icon" target="blank">
            <i className="bx bxl-linkedin"></i>
            </a>

            <a href="" className="home__social-icon" target="blank">
            <i className="bx bxl-github"></i>
            </a>
            </div>
            <span className='footer__copy'>
                &#169;Aryan Jain.All rights Reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer
