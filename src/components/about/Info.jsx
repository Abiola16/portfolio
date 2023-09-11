import React from 'react';
import { Award, Briefcase, Headphones } from "lucide-react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className="bx bx-award about__icon"><Award /></i>

        <h3 className="about__title">Expericence</h3>
        <span className="about__subtitle">1  year working experience</span>
      </div>

      <div className="about__box">
      <i className="bx bx-briefcase about__icon"><Briefcase /></i>

        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">2 + projects</span>
      </div>

      <div className="about__box">
      <i className="bx bx-support about__icon"><Headphones /></i>

        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info