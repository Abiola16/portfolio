import React, { useState } from 'react';
import { CheckCircle2, MoveRight, X, Table2, ChevronsLeftRight, PenSquare } from 'lucide-react';
import "./services.css";

const Services = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return(
        <section className="services section" id="services">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"><Table2 /></i>
                        <h3 className="services__title">Graphics<br />Designing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services__button-icon"><MoveRight height={20}/></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i  onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><X height={16}/></i>

                            <h3 className="services__modal-title">Graphics Designing</h3>
                            <p className="services__modal-description">Elevate Your Brand with These Services</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Logo Design: Crafting unique and memorable logos for businesses and brands.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Print Collateral: Designing brochures, flyers, posters, and other printed materials.</p>
                                </li>

                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Web Graphics: Creating web banners, icons, and visuals to enhance online presence.</p>
                                </li> */}

                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">I do things asfvasegveve</p>
                                </li> */}

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Business Cards: Designing professional and eye-catching business card layouts.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"><ChevronsLeftRight /></i>
                        <h3 className="services__title">Full-Stack<br/>Developing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"><MoveRight height={20}/></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i  onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><X height={16}/></i>

                            <h3 className="services__modal-title">Frontend Developing</h3>
                            <p className="services__modal-description">Enhance Your Online Presence with These Full-Stack Development Services</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Full-Stack Web Development: Building responsive, dynamic websites with seamless front-end and back-end integration.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">API & Database Management: Designing RESTful APIs and managing databases for scalable and secure applications.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"><CheckCircle2 /></i>
                                    <p className="services__modal-info">Performance & Deployment: Optimizing speed, ensuring cross-device compatibility, and deploying on modern platforms like Vercel</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"><Film /></i>
                        <h3 className="services__title">Video<br /> Editing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"><MoveRight height={20}/></i></span>

                    <div className="services__modal">
                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><X height={16}/></i>

                            <h3 className="services__modal-title">Video Editing</h3>
                            <p className="services__modal-description">Bring your ideas to life with professional video editing, motion graphics, and sound design services.</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Video Editing & Post-Production: Crafting polished videos with clean cuts, smooth transitions, and color correction.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Motion Graphics & Effects: Adding engaging animations, text overlays, and visual effects to enhance storytelling.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"><CheckCircle2 /></i>
                                    <p className="services__modal-info">Sound Design & Optimization: Mixing audio, syncing voiceovers, and enhancing sound quality for a professional finish.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
export default Services
