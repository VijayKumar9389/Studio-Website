import StakeholderInfo from "../../assets/screenshots/OnTract/Stakeholders.png";
import StakeholderFilter from "../../assets/screenshots/OnTract/StakeholderFilter.png";
import DeliveryPlanning from "../../assets/screenshots/OnTract/DeliveryPlanning.png";
import DeliveryRoutes from "../../assets/screenshots/OnTract/DeliveryRoutes.png";
import DeliveryStatus from "../../assets/screenshots/OnTract/DeliveryStatus.png";
import InventoryItems from "../../assets/screenshots/OnTract/InventoryItems.png";
import InventoryRecords from "../../assets/screenshots/OnTract/InventoryRecords.png";
import InventoryPackage from "../../assets/screenshots/OnTract/InventoryPackage.png";
import Upload from "../../assets/screenshots/Upload.png";
import OutReach from "../../assets/Media/outreach.png";
import Triton from "../../assets/TritonLogo.png";
import {WorkData} from "../../vite-env";



export const ontractData: WorkData = {
    title: "Outreach Management",
    desc: "OnTract, developed for Triton Public Awareness, streamlines stakeholder engagement, delivery logistics, and inventory tracking. The platform offers an intuitive interface to update stakeholder contacts, manage safety package distribution, and coordinate deliveries with real-time tracking.",
    imageUrl: OutReach,
    logo: Triton,
    link: "/ontract",
    sections: [
        {
            title: "Stakeholder Management",
            desc: "Organize, filter, and manage stakeholder data to streamline communication and outreach.",
            sections: [
                {
                    description:
                        "Filter stakeholders by various criteria such as contact status, location, or missing data to maximize engagement.",
                    imageUrl: StakeholderFilter,
                },
                {
                    description:
                        "View detailed stakeholder profiles with relationship mapping to support informed communication.",
                    imageUrl: StakeholderInfo,
                },
                {
                    description:
                        "Easily import Excel files and automatically normalize data into a structured, searchable database.",
                    imageUrl: Upload,
                },
            ],
        },
        {
            title: "Delivery Management",
            desc: "Coordinate, track, and optimize deliveries with complete visibility.",
            sections: [
                {
                    description:
                        "Plan, assign, and edit safety package deliveries, adjusting routes and logistics in real time to ensure efficient distribution.",
                    imageUrl: DeliveryPlanning,
                },
                {
                    description:
                        "Automatically update delivery and stakeholder statuses upon completion to maintain accurate records with minimal effort.",
                    imageUrl: DeliveryStatus,
                },
                {
                    description:
                        "Generate optimized delivery routes for field teams, reducing travel time and improving delivery performance.",
                    imageUrl: DeliveryRoutes,
                },
            ],
        },
        {
            title: "Inventory Management",
            desc: "Track inventory in real time and manage item distribution across deliveries.",
            sections: [
                {
                    description:
                        "Create and manage package configurations while monitoring live inventory levels to prevent shortages.",
                    imageUrl: InventoryPackage,
                },
                {
                    description:
                        "Upload item images and define quantities for each product to maintain organized, accessible records.",
                    imageUrl: InventoryItems,
                },
                {
                    description:
                        "Track the lifecycle of each item—view what's been delivered, what's pending, and what’s included in each package.",
                    imageUrl: InventoryRecords,
                },
            ],
        },
    ],
};