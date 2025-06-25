import './Navbar.scss';
import React, { useState, useEffect } from 'react';
import { CgClose } from 'react-icons/cg';
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-scroll'; // ✅ Import Link from react-scroll
import ContactFormDialog from "../Dialog/Dialog.tsx";

const Navbar: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const toggleMenu = () => {
        setMobileOpen(!mobileOpen);
    };

    const toggleContact = () => {
        setIsContactOpen(prev => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="navbar__container">

                    <div className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className="logo-highlight">Vijay</span>Kumar
                    </div>

                    <nav className={`navbar__links ${mobileOpen ? 'open' : ''}`}>
                        <Link to="features-section" smooth={true} duration={200} offset={-70}>About</Link>
                        <Link to="sections" smooth={true} duration={200} offset={-70}>Design</Link>
                        <Link to="projects-section" smooth={true} duration={200} offset={-70}>Projects</Link>
                    </nav>

                    <button className="navbar__contact-btn" onClick={toggleContact}>
                        Contact
                    </button>

                    <button className="navbar__toggle" onClick={toggleMenu}>
                        {mobileOpen ? <CgClose size={24} /> : <MdMenu size={24} />}
                    </button>

                </div>
            </header>

            <ContactFormDialog isOpen={isContactOpen} toggle={toggleContact} />
        </>
    );
};

export default Navbar;