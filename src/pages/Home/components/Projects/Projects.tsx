import './Projects.Module.scss';
import { project, projectData } from './data';
import { useNavigate } from 'react-router-dom';
import Header from "../../../../components/Header/Header.tsx";

const ProjectSection = () => {
    const navigate = useNavigate();

    return (
        <div className="projects-section">
            <Header
                heading="View My Work"
                desc="From Vision to Reality — From Concept to Impact"
                chip="Projects"
            />
            <div className="project-list">
                {project.map((section: projectData, index: number) => (
                    <div
                        className="project"
                        key={index}
                    >
                            <div className="project-img">
                                <img
                                    src={section.imageUrl}
                                    alt={section.title}
                                />
                            </div>
                            <div className="project-info">
                                <h4 className="section-header">{section.title}</h4>
                                <p>{section.description}</p>

                                {section.link && (
                                    <button
                                        className="btn"
                                        onClick={() => navigate(section.link)}
                                    >
                                        View Project
                                    </button>
                                )}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;