import React from "react";
import { BadgeCheck } from 'lucide-react';

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Graphics Designing & Video editing</h3>

            <div className="skills__box">
                <div className="skills__group center">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>

                        <div>
                            <h3 className="skills__name">Canva</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className="bx bx-badge-check"><BadgeCheck /></i>

                        <div>
                            <h3 className="skills__name">Adobe Premeire Pro 2025</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                </div>
                
                {/* <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">vv</h3>
                            <span className="skills__level">nn</span>
                        </div>
                    </div>
                    
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">gg</h3>
                            <span className="skills__level">hh</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>

                        <div>
                            <h3 className="skills__name">hh</h3>
                            <span className="skills__level">ll</span>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>

    );
};
export default Backend