import './Skills.scss';
import React from 'react';
import Header from "../../../../components/Header/Header.tsx";
import {competenciesData, Competency} from "./data.ts";
import resumePDF from '../../../../assets/resume.pdf';

const Skills: React.FC = () => {
    return (
        <section className="skills-section">
            <Header
                heading="Full-Stack Expertise"
                desc="I guide businesses through every stage of digital transformation"
                chip="Skills"
            />
            <div className="skills-cards-grid">
                {competenciesData.map((competency: Competency, index: number) => {
                    const Icon = competency.Icon;
                    return (
                        <div key={index} className="skill-card">
                            <div className="icon-wrapper">
                                <Icon size={40} />
                            </div>
                            <h3 className="card-title">{competency.title}</h3>
                            <p className="card-description">{competency.description[0]}</p>
                        </div>
                    );
                })}
            </div>
            <div className="skill-actions">
                <a
                    href={resumePDF}
                    download="VijayKumar_Resume.pdf"
                    className="download-resume-btn"
                >
                    Download Resume
                </a>
            </div>
        </section>
    );
};

export default Skills;