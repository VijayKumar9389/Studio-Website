import './Header.scss';
import React from "react";

interface HeaderProps {
    heading: string;
    desc: string;
    chip: string;
}

const Header: React.FC<HeaderProps> = ({ heading, desc, chip }) => {
    return (
        <section className="header-container">
            <span className="header-chip" data-aos="zoom-in">{chip}</span>
            <h2 className="header-title" data-aos="fade-up">{heading}</h2>
            <p className="header-desc" data-aos="fade-down" data-aos-delay="300">{desc}</p>
        </section>
    );
};

export default Header;