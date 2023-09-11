import React from 'react';
import { ArrowBigUp } from 'lucide-react';
import "./scrollup.css";

const Scrollup = () => {
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".scrollup")
        if (this.scrollY >= 530) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    <a href="#" className='scrollup'>
        <i className="uil uil-arrow-up scrollup-icon"><ArrowBigUp className='aa' /></i>
    </a>
  );
};

export default Scrollup