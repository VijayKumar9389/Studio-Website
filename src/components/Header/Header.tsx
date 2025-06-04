import './Header.scss';
import React from "react";

const Header: React.FC<{ heading: string, desc: string, chip: string }> = ({heading, desc, chip}) => {

    return (
        <div className="header-container">
            <div className="chip">
                <span>{chip}</span>
            </div>
            <h2 data-aos="fade-up">{heading}</h2>
            <p data-aos="fade-down" data-aos-delay="300">{desc}</p>
        </div>
    );
}

export default Header;