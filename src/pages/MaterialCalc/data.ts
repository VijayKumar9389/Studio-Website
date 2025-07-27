import Materials from "../../assets/screenshots/MaterialCalc/Materials.png";
import Locations from "../../assets/screenshots/MaterialCalc/Locations.png";
import Report from "../../assets/screenshots/MaterialCalc/Report.png";
import Adjust from "../../assets/screenshots/MaterialCalc/Adjust.jpeg";

import MaterialCalcApp from "../../assets/MaterialCalc.png";
import MaterialCalcLogo from "../../assets/Media/deploy.svg";

import { WorkData } from "../../vite-env";

export const materialCalcData: WorkData = {
    title: "Material Calculator",
    desc: "A mobile-first app for contractors to estimate materials with precision using surface area and unit coverage.",
    imageUrl: MaterialCalcApp,
    logo: MaterialCalcLogo,
    link: "/material-calc",
    sections: [
        {
            title: "Material Estimation",
            desc: "Streamlined defining materials, setting coverage rates, and generating accurate estimates across job sites.",
            sections: [
                {
                    description:
                        "Define materials with custom names, unit costs, and coverage per square foot to build a personalized estimation library.",
                    imageUrl: Materials,
                },
                {
                    description:
                        "Create and manage job sites by entering location names and total surface areas to calculate project-specific needs.",
                    imageUrl: Locations,
                },
                {
                    description:
                        "Easily adjust coverage values per material and site to reflect real-world conditions and improve accuracy.",
                    imageUrl: Adjust,
                },
                {
                    description:
                        "Generate a detailed estimate report per site, summarizing material quantities, total costs, and unit requirements.",
                    imageUrl: Report,
                },
            ],
        },
    ],
};