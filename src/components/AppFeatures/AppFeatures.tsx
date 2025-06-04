import React from "react";
import "./AppFeatures.scss";
import {WorkSectionData} from "../../vite-env";

interface AppFeaturesProps {
    title: string;
    description?: string;
    sections: WorkSectionData[];
}

const AppFeatures: React.FC<AppFeaturesProps> = ({ title, description, sections }) => {
    return (
        <div className="application-container">
            {/* Sticky Header Column */}
            <div className="application-header">
                <h4 className="section-title">{title}</h4>
                {description && <p className="section-description">{description}</p>}
            </div>
            {/* Scrollable Content Column */}
            <div className="work-wrapper">
                {sections.map((section, index) => (
                    <div key={index} className="work-item" data-aos="fade-up">
                        <div className="image-container">
                            <img
                                src={section.imageUrl}
                                alt={section.description || "Feature preview"}
                                className="work-image"
                            />
                        </div>
                        <p className="work-description">{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AppFeatures;