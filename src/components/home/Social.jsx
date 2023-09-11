import React from 'react';
import { Instagram, Github, Twitter } from 'lucide-react';

const Social = () => {
  return (
    <div className="home__social">

        <a href="" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"><Instagram /></i>
        </a>

        <a href="" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"><Github /></i>
        </a>

        <a href="" className="home__social-icon" target="_blank">
            <i className="uil uil-instagram"><Twitter /></i>
        </a>

    </div>
  )
}

export default Social