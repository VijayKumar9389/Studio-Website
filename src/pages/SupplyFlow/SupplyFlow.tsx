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
                        Businesses managing inventory across multiple locations often struggle with real-time tracking, accountability, and organization. Lacking centralized control, actions like transfers, audits, and user activity tracking become complex and error-prone. There’s a growing need for a streamlined system that offers full transparency and control across warehouses, users, and stock movements.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I built an enterprise-grade inventory management system that addresses the full supply flow: Manage inventory and stock efficiently with support for multiple locations and sub-locations. Add equipment, track warranties and statuses, and transfer items between locations as needed. Create material batches to monitor stock inflow, and adjust inventory by transferring or removing stock from batches. Assign multiple users with admin-level permissions to safeguard sensitive features, while a comprehensive log tracks all actions — including additions, edits, deletions, and transfers — along with the responsible user for full transparency and accountability.
                    </p>
                </section>

                <section className="app-features">
                    <AppFeatures
                        title={"test"}
                        description={inventorySupplyData.desc}
                        sections={inventorySupplyData.sections.flatMap(section => section.sections)}
                    />
                </section>

                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        The Inventory Supply Flow App streamlined inventory operations across locations, enhanced control through user permissions, and improved operational insight via dashboards. Teams can now manage warehouse and equipment logistics with confidence, while tracking materials, actions, and stock changes accurately. This leads to greater operational transparency, reduced mismanagement, and stronger accountability.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default InventorySupplyPage;