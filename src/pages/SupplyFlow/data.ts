import Dashboard from "../../assets/screenshots/SupplyFlow/Dashboard.png";
import Warehouses from "../../assets/screenshots/SupplyFlow/Warehouses.png";
import Equipment from "../../assets/screenshots/SupplyFlow/Equipment.png";
import Materials from "../../assets/screenshots/SupplyFlow/Materials.png";
import Logs from "../../assets/screenshots/SupplyFlow/Logs.png";
import Users from "../../assets/screenshots/SupplyFlow/Users.png";
import InventoryApp from "../../assets/inventoryapp.png";
import InventoryLogo from "../../assets/Media/deploy.svg";

import { WorkData} from "../../vite-env";

export const inventorySupplyData: WorkData = {
    title: "Supply Flow App",
    desc: "from warehouse structuring and batch material tracking to equipment lifecycle management and user accountability.",
    imageUrl: InventoryApp,
    logo: InventoryLogo,
    link: "/inventory-supply",
    sections: [
        {
            title: "Inventory, Warehousing & User Control",
            desc: "Comprehensive tools to streamline inventory operations, monitor warehouse activity, and manage user access securely.",
            sections: [
                {
                    description:
                        "Monitor inventory across multiple warehouses with sub-location support for organized stock distribution and tool tracking.",
                    imageUrl: Warehouses,
                },
                {
                    description:
                        "Log equipment with warranty status, usage lifecycle, and enable seamless transfers across locations for operational flexibility.",
                    imageUrl: Equipment,
                },
                {
                    description:
                        "Add and manage material batches with detailed attributes such as quantity, pricing, location, and expiration for accurate tracking.",
                    imageUrl: Materials,
                },
                {
                    description:
                        "Visualize warehouse and inventory metrics in real time with an interactive dashboard highlighting stock levels and distribution.",
                    imageUrl: Dashboard,
                },
                {
                    description:
                        "Ensure traceability with a complete activity log detailing every stock change—additions, edits, deletions, and transfers—along with the user responsible.",
                    imageUrl: Logs,
                },
                {
                    description:
                        "Enforce security with role-based user permissions, giving teams controlled access to features based on their responsibilities.",
                    imageUrl: Users,
                },
            ],
        },
    ],
};