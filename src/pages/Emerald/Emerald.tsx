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
                        Emerald Executive Housing struggled to efficiently manage rental property inventory across multiple locations. Tracking missing or consumed items, monitoring costs, and maintaining accurate records were time-consuming and prone to errors. Additionally, they needed a strong online presence to showcase available properties and attract potential tenants.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I designed a robust Inventory Management System integrated with a responsive website to address these challenges. The system allows property managers to track inventory in real time by adding items to specific locations, logging costs, and securely storing receipts for streamlined financial tracking.

                        To enhance customer engagement, I developed a website that advertises available properties and features an inquiry form, making it easier for potential tenants to connect with Emerald Executive Housing. All inquiries are automatically organized within the inventory system, ensuring efficient communication and response management.
                    </p>
                </section>

                <section className="app-features">
                    <AppFeatures
                        title={emeraldData.title}
                        description={emeraldData.desc}
                        sections={emeraldData.sections.flatMap(section => section.sections)}
                    />
                </section>

                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        The Inventory Management System provided better oversight of stored items, reduced financial tracking errors, and centralized receipt management. Once launched, the website will enhance Emerald’s online visibility and streamline tenant inquiries, improving communication, response efficiency, and overall customer experience.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default EmeraldInventoryPage;