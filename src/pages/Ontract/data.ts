import StakeholderInfo from "../../assets/screenshoots/OnTract/Stakeholders.png";
import StakeholderFilter from "../../assets/screenshoots/OnTract/StakeholderFilter.png";
import DeliveryPlanning from "../../assets/screenshoots/OnTract/DeliveryPlanning.png";
import DeliveryRoutes from "../../assets/screenshoots/OnTract/DeliveryRoutes.png";
import DeliveryStatus from "../../assets/screenshoots/OnTract/DeliveryStatus.png";
import InventoryItems from "../../assets/screenshoots/OnTract/InventoryItems.png";
import InventoryRecords from "../../assets/screenshoots/OnTract/InventoryRecords.png";
import InventoryPackage from "../../assets/screenshoots/OnTract/InventoryPackage.png";
import Upload from "../../assets/screenshoots/Upload.png";
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
            desc: "Efficiently organize and manage stakeholder interactions.",
            sections: [
                {
                    description:
                        "Filter stakeholders based on multiple criteria to enhance engagement and outreach efficiency.",
                    imageUrl: StakeholderFilter,
                },
                {
                    description:
                        "Gain insights by visualizing stakeholder relationships and detailed contact information.",
                    imageUrl: StakeholderInfo,
                },
                {
                    description:
                        "Seamlessly upload and normalize project data from Excel, ensuring structured database storage.",
                    imageUrl: Upload,
                },
            ],
        },
        {
            title: "Delivery Management",
            desc: "Optimize package distribution and tracking for seamless deliveries.",
            sections: [
                {
                    description:
                        "Assign and modify safety packages, manage delivery details, and adjust logistics to ensure timely distribution.",
                    imageUrl: DeliveryPlanning,
                },
                {
                    description:
                        "Automatically update stakeholder and delivery statuses upon completion for streamlined tracking.",
                    imageUrl: DeliveryStatus,
                },
                {
                    description:
                        "Optimize delivery routes for field agents, reducing travel time and improving efficiency.",
                    imageUrl: DeliveryRoutes,
                },
            ],
        },
        {
            title: "Inventory Management",
            desc: "Maintain precise inventory control and package tracking.",
            sections: [
                {
                    description:
                        "Create and customize packages while maintaining real-time inventory counts.",
                    imageUrl: InventoryPackage,
                },
                {
                    description:
                        "Store item images and quantities for accurate record-keeping and quick reference.",
                    imageUrl: InventoryItems,
                },
                {
                    description:
                        "Track delivered items, pending shipments, and package details for enhanced inventory management.",
                    imageUrl: InventoryRecords,
                },
            ],
        },
    ],
};