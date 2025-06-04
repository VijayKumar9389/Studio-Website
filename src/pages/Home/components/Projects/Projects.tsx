import "./Projects.Module.scss";
import { WorkData, workData } from "./data.ts";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();

    return (
        <section className="projects-section">
            <h1>Featured Projects</h1>
            <div className="projects-list">
                {workData.map((project: WorkData, index: number) => (
                    <div
                        key={index}
                        className="project-card"
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 100} // 100ms stagger effect
                        onClick={() => navigate(project.link)}
                        style={{ cursor: 'pointer' }}
                    >
                        {project.imageUrl && (
                            <div className="project-image-wrapper">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    className="project-image"
                                />
                            </div>
                        )}
                        <div className="project-info">
                            <h5 className="project-title">{project.title}</h5>
                            {project.desc && <p className="project-desc">{project.desc}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;