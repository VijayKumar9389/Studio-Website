import Losses from "../../assets/screenshots/Emerald/Losses.png";
import Inventory from "../../assets/screenshots/Emerald/Inventory.png";
import Rentals from "../../assets/screenshots/Emerald/Rentals.png";
import Questions from "../../assets/screenshots/Emerald/Questions.png";
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
            desc: "Modernize rental property operations with streamlined inventory tracking and a tenant-focused web presence.",
            sections: [
                {
                    description:
                        "Track inventory across multiple properties and securely store receipts for accurate financial documentation.",
                    imageUrl: Losses,
                },
                {
                    description:
                        "Quickly identify missing or consumed items, monitor costs, and maintain accountability across all rental units.",
                    imageUrl: Inventory,
                },
                {
                    description:
                        "Boost your brand’s digital presence with a responsive website showcasing available properties and engaging design.",
                    imageUrl: Rentals,
                },
                {
                    description:
                        "Centralize tenant communication through integrated inquiry forms that sync directly with your inventory system.",
                    imageUrl: Questions,
                },
            ],
        },
    ],
};