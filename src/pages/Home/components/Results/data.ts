import {
    FaFilter,
    FaUpload,
    FaRoute,
    FaUserCircle,
    FaClipboardCheck,
    FaBoxes,
    FaImage,
    FaFileInvoice,
    FaChartPie
} from 'react-icons/fa';
import {
    MdOutlineStorage,
    MdOutlineContactSupport
} from 'react-icons/md';
import { BiTransferAlt } from 'react-icons/bi';

export const skillsData = [
    {
        title: "Smart Stakeholder Filtering",
        description: "Quickly find the right contacts with multi-criteria filtering for targeted outreach.",
        icon: FaFilter,
    },
    {
        title: "Excel Upload & Data Normalization",
        description: "Seamlessly import Excel files and structure them into a relational database.",
        icon: FaUpload,
    },
    {
        title: "Optimized Delivery Routes",
        description: "Reduce travel time with auto-generated, efficient delivery paths for field agents.",
        icon: FaRoute,
    },
    {
        title: "Real-Time Status Tracking",
        description: "Keep stakeholders and deliveries updated instantly with live status changes.",
        icon: FaClipboardCheck,
    },
    {
        title: "Interactive Stakeholder Profiles",
        description: "View detailed stakeholder info with relationship context and contact history.",
        icon: FaUserCircle,
    },
    {
        title: "Custom Package Builder",
        description: "Group items into delivery-ready packages while tracking inventory in real time.",
        icon: FaBoxes,
    },
    {
        title: "Item Image & Quantity Tracking",
        description: "Visually track item records with stored photos and real-time stock updates.",
        icon: FaImage,
    },
    {
        title: "Delivery & Inventory Reporting",
        description: "Monitor item history, delivery completion, and inventory flow at a glance.",
        icon: FaChartPie,
    },
    {
        title: "Receipt Archiving & Loss Prevention",
        description: "Track costs and missing items with digital receipts and discrepancy resolution.",
        icon: FaFileInvoice,
    },
    {
        title: "Cloud-Based Storage",
        description: "Securely store stakeholder, delivery, and inventory data in the cloud.",
        icon: MdOutlineStorage,
    },
    {
        title: "Centralized Communication",
        description: "Consolidate inquiries and client messages through integrated contact forms.",
        icon: MdOutlineContactSupport,
    },
    {
        title: "Cross-System Sync",
        description: "Synchronize stakeholder, delivery, and inventory records across all app modules.",
        icon: BiTransferAlt,
    }
];