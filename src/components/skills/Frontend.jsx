import React from "react";
import { BadgeCheck } from 'lucide-react';

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Full-Stack Web Developing</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>
                        <div>
                            <h3 className="skills__name">HTML & CSS</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>
                        <div>
                            <h3 className="skills__name">Javascript & Jquery</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>
                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>
                        <div>
                            <h3 className="skills__name">Git, Github & Command Line</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>
                        <div>
                            <h3 className="skills__name">Wordpress</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>

                        <div>
                            <h3 className="skills__name">React</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};
export default Frontend