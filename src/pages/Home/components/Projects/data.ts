import OutReach from "../../../../assets/outreach.png";
import InventoryApp from "../../../../assets/rental.png";
import Material from "../../../../assets/inventoryapp.png";

export interface projectData {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
}

export const project = [
    {
        title: 'OnTract App',
        description:
            'OnTract, developed for Triton Public Awareness, is a centralized information system that streamlines stakeholder management, safety package delivery tracking, and real-time monitoring of project progress.',
        imageUrl: OutReach,
        link: '/ontract',
    },
    {
        title: 'Rental Inventory Tracker',
        description:
            'The Inventory Tracker, developed for Emerald Executive Housing, is a centralized system that modernizes rental property inventory management while supporting digital marketing efforts to enhance tenant engagement.',
        imageUrl: InventoryApp,
        link: '/emerald',
    },
    {
        title: 'Supply Flow',
        description:
            'A centralized system for managing inventory, equipment, and warehouse operations across multiple locations—offering real-time visibility, granular tracking, and secure access control for complete operational oversight.',
        imageUrl: Material,
        link: '/supplyflow',
    },
    // {
    //     title: 'Material Calculator',
    //     description:
    //         'Material Calculator is a mobile-first app built for contractors to generate accurate material estimates by entering site dimensions and coverage rates.',
    //     imageUrl: MaterialCalc,
    //     link: '/materialcalc',
    // },
];