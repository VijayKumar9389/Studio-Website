import React from "react";
import "./ProjectHeader.scss";

interface AppHeaderProps {
    title: string;
    logo?: string;
    imageUrl?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title, imageUrl }) => {
    return (
        <header className="app-header">
                <h1 className="app-title">{title}</h1>
            <div className="app-image">
                <img
                    src={imageUrl}
                    alt={`${title} banner`}
                    className="parallax-img"
                />
            </div>
        </header>
    );
};

export default AppHeader;