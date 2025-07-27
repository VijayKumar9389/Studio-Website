import React, { useEffect } from "react";
import "../../styles/projectPage.scss";
import { inventorySupplyData } from "./data.ts";
import AppFeatures from "../../components/AppFeatures/AppFeatures.tsx";
import AppHeader from "../../components/ProjectHeader/ProjectHeader.tsx";

const InventorySupplyPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    if (!inventorySupplyData) {
        return <p className="error-message">Project not found</p>;
    }

    return (
        <div className="app-page">


            <div className="app-body">
                <AppHeader
                    title={inventorySupplyData.title}
                    logo={inventorySupplyData.logo}
                    imageUrl={inventorySupplyData.imageUrl}
                />

                <section className="app-section">
                    <h2>The Challenge</h2>
                    <p>
                        Managing inventory across multiple warehouses can lead to disorganized tracking, lack of accountability, and limited real-time insight. Without a centralized system, tasks like transfers, audits, and activity tracking become inefficient and prone to errors. Businesses needed a unified platform to manage stock, track user actions, and maintain control over assets and materials across all locations.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I developed an enterprise-grade inventory management system that covers the full supply flow. The system supports multi-location and sub-location tracking, enables stock transfers, and monitors inventory through material batches. Equipment can be registered with warranty and status details, while admins can adjust stock levels or remove items as needed. A role-based permission system protects sensitive actions, and a built-in audit log records all changes—capturing who performed each action for full traceability and accountability.
                    </p>
                </section>

                <section className="app-features">
                    <AppFeatures
                        title={inventorySupplyData.sections[0].title}
                        description={inventorySupplyData.sections[0].desc}
                        sections={inventorySupplyData.sections.flatMap(section => section.sections)}
                    />
                </section>

                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        The Supply Flow system streamlined inventory operations across all locations, enhanced control through user roles, and improved oversight via real-time dashboards. Teams now manage warehouse logistics with confidence, accurately track materials and changes, and operate with greater transparency, reduced risk of mismanagement, and increased accountability.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default InventorySupplyPage;