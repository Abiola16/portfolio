import React from 'react';
import { Instagram, Github, Twitter, Mail, Phone } from 'lucide-react';
import "./footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className='footer__title'>Mujeeb</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#testimonials" className="footer__link">Testimonials</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://whatsapp.com/dl/" className="footer__social-link" target="_blank">
                        <Phone width={20} />
                    </a>

                    <a href="https://github.com/Abiola16" className="footer__social-link" target="_blank">
                        <Github width={22}/>
                    </a>

                    <a href="mailto:mujeebabiola898@gmail.com" className="footer__social-link" target="_blank">
                        <Mail width={22}/>
                    </a>

                </div>

                <span className="footer__copy">&#169; Mujeeb Abiola. All rigths reserved</span>
            </div>

        </footer>
    )
}

export default Footer