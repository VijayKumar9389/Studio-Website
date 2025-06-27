import { useNavigate } from "react-router-dom";
import { workData } from "./data";
import './Projects.Module.scss';
import { FiArrowUpRight } from "react-icons/fi";

const ProjectsSection = () => {
    const navigate = useNavigate();

    return (
        <section className="projects-section">
            <h1 data-aos="fade-up">Featured Projects</h1>

            <div className="projects-list">
                {workData.map((project, index) => (
                    <div
                        key={index}
                        className="project-card"
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 100}
                        onClick={() => navigate(project.link)}
                    >
                        {project.imageUrl && (
                            <div className="project-image-wrapper">
                                <img src={project.imageUrl} alt={project.title} className="project-image" />
                                <div className="image-overlay" />
                            </div>
                        )}

                        <div className="project-info">
                            {project.desc && <p className="project-desc">{project.desc}</p>}
                            <div className="project-title-wrapper">
                                <h1 className="project-title">{project.title}</h1>
                                <FiArrowUpRight className="title-arrow" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;