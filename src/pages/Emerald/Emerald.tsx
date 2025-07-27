import React, { useEffect } from "react";
import "../../styles/projectPage.scss";
import { emeraldData } from "./data.ts";
import AppFeatures from "../../components/AppFeatures/AppFeatures.tsx";
import AppHeader from "../../components/ProjectHeader/ProjectHeader.tsx";


const EmeraldInventoryPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    if (!emeraldData) {
        return <p className="error-message">Project not found</p>;
    }

    return (
        <div className="app-page">

            <div className="app-body">
            <AppHeader title={emeraldData.title} logo={emeraldData.logo} imageUrl={emeraldData.imageUrl} />
                <section className="app-section">
                    <h2>The Challenge</h2>
                    <p>
                        Emerald Executive Housing struggled to manage inventory across multiple rental properties. Tracking missing or consumed items, maintaining accurate records, and storing receipts were time-consuming and prone to error. They also lacked an online presence to effectively showcase available units and engage prospective tenants.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I developed a full-featured Inventory Management System paired with a responsive marketing website. Property managers can assign items to specific locations, monitor usage and losses, and upload receipts for accurate financial tracking. The website highlights available properties and includes an inquiry form, with all submissions automatically integrated into the system to streamline tenant communication and follow-up.
                    </p>
                </section>

                <section className="app-features">
                    <AppFeatures
                        title={emeraldData.sections[0].title}
                        description={emeraldData.sections[0].desc}
                        sections={emeraldData.sections.flatMap(section => section.sections)}
                    />
                </section>

                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        The system improved inventory oversight, enabled better loss tracking, and centralized receipt management. Once launched, the website will strengthen Emerald’s online presence and simplify tenant inquiries—enhancing communication, response time, and overall customer experience.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EmeraldInventoryPage;