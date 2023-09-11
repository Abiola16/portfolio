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

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Web Graphics: Creating web banners, icons, and visuals to enhance online presence.</p>
                                </li>

                                {/* <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">I do things asfvasegveve</p>
                                </li> */}

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Business Cards: Designing professional and eye-catching business card layouts.

</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className="uil uil-arrow services__icon"><ChevronsLeftRight /></i>
                        <h3 className="services__title">Frontend<br/>Developing</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services__button-icon"><MoveRight height={20}/></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i  onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><X height={16}/></i>

                            <h3 className="services__modal-title">Frontend Developing</h3>
                            <p className="services__modal-description">Enhance Your Online Presence with These Front-End Development Services</p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">User Interface (UI) Development: Crafting visually appealing and intuitive user interfaces.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Responsive Web Design: Ensuring websites adapt seamlessly to various screen sizes and devices.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Interactive Features: Implementing dynamic elements such as forms, animations, and user interactivity. </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Front-End Frameworks: Utilizing frameworks like React, Angular, or Vue.js for efficient development.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"><CheckCircle2 /></i>
                                    <p className="services__modal-info">Optimizing Website Performance: Enhancing website speed and efficiency for an improved user experience.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <div className="services__content">
                    <div>
                        <i className="uil uil-edit services__icon"><PenSquare /></i>
                        <h3 className="services__title">Visual<br /> designer</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"><MoveRight height={20}/></i></span>

                    <div className="services__modal">
                        <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><X height={16}/></i>

                            <h3 className="services__modal-title">Visual designer</h3>
                            <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quos dolorum sed fuga incidunt ipsa autem voluptates </p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">I do product design</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">Web page development</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">I do fdhbZA things </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"> <CheckCircle2 /></i>
                                    <p className="services__modal-info">I do bcxbhhdxfnbfd things </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"><CheckCircle2 /></i>
                                    <p className="services__modal-info">I do things </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}

            </div>
        </section>
    );
};
export default Services