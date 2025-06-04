// DropdownMenu.tsx
import React from 'react';
import './DropdownMenu.scss';

interface Props {
    isOpen: boolean;
    onLinkClick?: () => void;
}

const DropdownMenu: React.FC<Props> = ({ isOpen, onLinkClick }) => {
    return (
        <nav className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
            <a href="#home" onClick={onLinkClick}>Home</a>
            <a href="#features" onClick={onLinkClick}>Features</a>
            <a href="#projects" onClick={onLinkClick}>Projects</a>
        </nav>
    );
};

export default DropdownMenu;