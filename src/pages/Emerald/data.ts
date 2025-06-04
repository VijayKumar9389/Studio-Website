import Losses from "../../assets/screenshoots/Emerald/Losses.png";
import Inventory from "../../assets/screenshoots/Emerald/Inventory.png";
import Rentals from "../../assets/screenshoots/Emerald/Rentals.png";
import Questions from "../../assets/screenshoots/Emerald/Questions.png";
import InventoryApp from "../../assets/Media/Collab.png";
import Emerald from "../../assets/Emerald Logo.png";

import { WorkData} from "../../vite-env";

export const emeraldData: WorkData = {
    title: "Inventory Management & Digital Marketing",
    desc: "The Inventory Tracker, developed for Emerald Executive Housing, modernizes rental property inventory management while integrating digital marketing strategies to enhance online presence and customer engagement. (In Progress)",
    imageUrl: InventoryApp,
    logo: Emerald,
    link: "/emerald",
    sections: [
        {
            title: "Inventory App & Website",
            desc: "Streamlining inventory tracking and enhancing digital branding.",
            sections: [
                {
                    description:
                        "Effortlessly manage rental property inventory with receipt storage for accurate record-keeping.",
                    imageUrl: Losses,
                },
                {
                    description:
                        "Identify missing items, track total costs, and resolve discrepancies across multiple rental locations.",
                    imageUrl: Inventory,
                },
                {
                    description:
                        "Improve online visibility with an interactive website designed to engage potential tenants effectively.",
                    imageUrl: Rentals,
                },
                {
                    description:
                        "Enhance customer interaction by centralizing inquiries through integrated contact forms within the app.",
                    imageUrl: Questions,
                },
            ],
        },
    ],
};