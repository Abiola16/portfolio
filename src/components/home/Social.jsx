import React from 'react';
import { Instagram, Github, Twitter } from 'lucide-react';

const Social = () => {
  return (
    <div className="home__social">

        <a href="https://www.instagram.com/khee.muu/#" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"><Instagram /></i>
        </a>

        <a href="https://github.com/Abiola16" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"><Github /></i>
        </a>

        <a href="https://x.com/khee_muu?t=jq4ar2m4-xyGoEd2jlgO1A&s=09" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"><Twitter /></i>
        </a>

    </div>
  )
}

export default Social