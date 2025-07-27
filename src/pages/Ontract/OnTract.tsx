import React, {useEffect} from "react";
import "../../styles/projectPage.scss";
import {ontractData} from "./data.ts";
import AppHeader from "../../components/ProjectHeader/ProjectHeader.tsx";
import AppFeatures from "../../components/AppFeatures/AppFeatures.tsx";


const OnTractPage: React.FC = () => {

    // scroll to top on page load
    useEffect(() => {
        window.scrollTo({ top: 0});
    }, []);

    if (!ontractData) return <p>Project not found</p>;

    return (
        <div className="app-page">



            <div className="app-body">
            <AppHeader title={ontractData.title} logo={ontractData.logo} imageUrl={ontractData?.imageUrl}/>
                <section className="app-section">
                    <h2>The Challenge</h2>
                    <p>
                        Triton previously relied on disconnected Excel files for stakeholder management and delivery tracking. Each team member worked on separate copies, leading to version conflicts, manual data merges, and limited real-time visibility. Visualizing delivery progress and identifying incomplete contacts was time-consuming and error-prone. This fragmented system hindered collaboration and slowed down field operations.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I designed and developed OnTract to centralize and streamline Triton’s outreach operations. The application ingests project data from Excel, normalizes and stores stakeholder records, and enables teams to update contact statuses, plan deliveries, assign packages, and manage inventory within a unified interface.
                    </p>
                </section>

                {/* Render a separate Collab for each main section */}
                <section className="app-features">
                    {ontractData.sections.map((mainSection, index) => (
                        <AppFeatures
                            key={index}
                            title={mainSection.title}
                            description={mainSection.desc}
                            sections={mainSection.sections}
                        />
                    ))}
                </section>


                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        OnTract replaced multiple disconnected workflows with a single source of truth, significantly reducing manual entry and data consolidation. It improved coordination across teams, enhanced contact tracking, and provided real-time visibility into project status and stakeholder engagement. The system also established scalable, repeatable workflows to support future outreach initiatives more efficiently.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default OnTractPage;