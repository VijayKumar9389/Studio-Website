import {project} from "./data";
import './Achievements.Module.scss';
import Header from "../../../../components/Header/Header.tsx";

const Achievements = () => {

    return (
        <section className="achievements-section">
            <Header
                heading="Making An Impact"
                desc="Simplify Complexity, Eliminate Friction, and Make Smarter Decisions"
                chip="Achievements"
            />
            <div className="achievements-list">
                {project.map((project, index) => (
                    <div
                        key={index}
                        className="achievements-card"
                        data-aos="zoom-in-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="achievements-info">
                            <h1 className="project-title">{project.title}</h1>
                            {project.description && <p className="project-desc">{project.description}</p>}
                        </div>

                        {project.imageUrl && (
                            <div className="achievements-image-wrapper">
                                <img src={project.imageUrl} alt={project.title}/>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;