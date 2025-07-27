// pages/material-calc/index.tsx
import React, { useEffect } from "react";
import "../../styles/projectPage.scss";
import { materialCalcData } from "./data.ts";
import AppFeatures from "../../components/AppFeatures/AppFeatures.tsx";
import AppHeader from "../../components/ProjectHeader/ProjectHeader.tsx";

const MaterialCalcPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    if (!materialCalcData) {
        return <p className="error-message">Project not found</p>;
    }

    return (
        <div className="app-page">
            <div className="app-body">
                <AppHeader
                    title={materialCalcData.title}
                    logo={materialCalcData.logo}
                    imageUrl={materialCalcData.imageUrl}
                />

                <section className="app-section">
                    <h2>The Challenge</h2>
                    <p>
                        Contractors often struggle to estimate material needs accurately across worksites, leading to costly overordering or material shortages.  Managing square footage, coverage rates, and multiple job sites without a streamlined tool created inefficiencies and inconsistency in planning.
                    </p>
                </section>

                <section className="app-section">
                    <h2>Solution</h2>
                    <p>
                        I designed and developed Material Calculator using React Native to provide a simple and accurate solution for on-site material estimation. Users can define custom materials with their respective coverage rates, organize jobs by location, and input site square footage to calculate material requirements. The app supports quick adjustments to values, enabling users to fine-tune estimates, improve accuracy, and ensure better purchasing decisions.
                    </p>
                </section>

                <section className="app-features">
                    <AppFeatures
                        title={materialCalcData.sections[0].title}
                        description={materialCalcData.sections[0].desc}
                        sections={materialCalcData.sections.flatMap(section => section.sections)}
                    />
                </section>

                <section className="app-section">
                    <h2>Results</h2>
                    <p>
                        Material Calculator provides contractors with a reliable tool for managing estimates across job sites. It improves project planning, reduces material waste, and centralizes estimates by location—enabling better coordination, more accurate ordering, and stronger cost control on every project.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default MaterialCalcPage;