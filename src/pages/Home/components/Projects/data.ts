import InventoryApp from "../../../../assets/rental.png";
import OutReach from "../../../../assets/outreach.png";
import Material from "../../../../assets/inventoryapp.png";

// Define the structure for project data.ts
export interface WorkData {
    title: string;
    desc?: string;
    imageUrl?: string;
    link: string;
    bgGradient?: string;
}

export const workData: WorkData[] = [
    {
        title: 'OnTract App',
        desc: 'Outreach Management',
        imageUrl: OutReach,
        bgGradient: "linear-gradient(135deg, #f9c5d1, #f06292)",
        link: '/ontract',

    },
    {
        title: 'Rental Inventory',
        desc: 'Inventory Management & Digital Marketing',
        imageUrl: InventoryApp,
        bgGradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        link: '/emerald',
    },
    {
        title: 'Supply Flow',
        desc: 'Inventory and Stock Management',
        imageUrl: Material,
        bgGradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        link: '/supplyflow',
    }
]


// Work data.ts for each project
// export const workData: WorkData[] = [
//     {
//         title: 'Outreach Management',
//         desc: 'OnTract, developed for Triton Public Awareness, streamlines stakeholder engagement, delivery logistics, and inventory tracking. The platform offers an intuitive interface to update stakeholder contacts, manage safety package distribution, and coordinate deliveries with real-time tracking.',
//         imageUrl: OutReach,
//         bgGradient: "linear-gradient(135deg, #f9c5d1, #f06292)",
//         link: '/ontract',
//
//     },
//     {
//         title: 'Inventory Management & Digital Marketing',
//         desc: 'The Inventory Tracker, developed for Emerald Executive Housing, modernizes rental property inventory management while integrating digital marketing strategies to enhance online presence and customer engagement. (In Progress)',
//         imageUrl: InventoryApp,
//         bgGradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
//         link: '/emerald',
//     },
//     {
//         title: 'Inventory and Stock Management',
//         desc: "A centralized system for managing inventory, equipment, and warehouse operations across multiple locations. Designed to provide real-time insights, granular tracking, and secure user access control for full operational visibility.",
//         imageUrl: Material,
//         bgGradient: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
//         link: '/supplyflow',
//     }
// ]
