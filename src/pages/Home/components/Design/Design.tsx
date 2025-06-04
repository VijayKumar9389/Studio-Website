import './Design.Module.scss';
import ImageOne from '../../../../assets/fx3.png';
import ImageTwo from '../../../../assets/fx1.png';
import ImageThree from '../../../../assets/fx2.png';

import ImageFour from '../../../../assets/fx4.png';
import Features from "../Features/Features.tsx";

const ProjectSection = () => {
    const project = {
        title: 'Intelligent Business Management Platform',
        sections: [
            {
                title: 'Seamless Control',
                description:
                    'Manage complex operations like inventory tracking, delivery planning, or customer engagement through custom-built modules. Our intuitive interfaces streamline coordination through visual tools designed for ease and control.',
                imageUrl: ImageTwo,
            },
            {
                title: 'Enhanced Oversight',
                description:
                    'Access real-time dashboards that consolidate key metrics, automate calculations, and visualize progress. Upload spreadsheets to instantly transform raw data into actionable insights enabling fast, informed decisions backed by real-time information.',
                imageUrl: ImageOne,
            },
            {
                title: 'Prevent Errors',
                description:
                    'Protect your data with secure logins and role-based access, ensuring only the right people access sensitive features. Guided forms, automated updates, and real-time validations maintain data accuracy while automation prevents human error.',
                imageUrl: ImageThree,
            },
            {
                title: 'Improve Collaboration',
                description:
                    'Work seamlessly across teams and devices with a unified platform that updates in real time. Whether on desktop, tablet, or mobile, enjoy a consistent experience with responsive design. Collaborate through interactive tables, filters, and cloud-based file storage, all in one place.',
                imageUrl: ImageFour,
            },
        ],
    };

    return (
        <div className="section-container">
            <Features/>
            <div className="sections">
                {project.sections.map((section, index) => (
                    <div
                        className="section"
                        key={index}
                        data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                        data-aos-delay={index * 100}
                    >
                        <div className="section-content">
                            <div className="image-wrapper">
                                <img
                                    src={section.imageUrl}
                                    alt={section.title}
                                    className="section-image"
                                />
                            </div>

                            <div className="section-text">
                                <h4 className="section-header">{section.title}</h4>
                                <p>{section.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectSection;