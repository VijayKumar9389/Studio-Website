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
                    <p>Triton Public Awareness relied on Excel files for stakeholder data management, requiring manual updates, separate files for different team members, and time-consuming compilation of master records. This led to inconsistencies, inefficiencies, and difficulty in tracking deliveries. Additionally, Excel was used for visualizing deliveries, further complicating an already cumbersome process.</p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I designed OnTract, a centralized system that automates data processing, streamlines workflows, and enhances operational efficiency. The platform enables real-time stakeholder management, delivery tracking, and inventory oversight, providing a seamless and scalable solution for Triton’s outreach program.
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
                        OnTract has eliminated manual processes, reduced errors, and improved collaboration by consolidating all data in one place. Triton now benefits from more efficient stakeholder management and enhanced coordination with real-time tracking of deliveries, packages, and project progress.
                    </p>
                </section>

            </div>
        </div>
    );
};

export default OnTractPage;