import Dashboard from "../../assets/screenshoots/SupplyFlow/Dashboard.png";
import Warehouses from "../../assets/screenshoots/SupplyFlow/Warehouses.png";
import Equipment from "../../assets/screenshoots/SupplyFlow/Equipment.png";
import Materials from "../../assets/screenshoots/SupplyFlow/Materials.png";
import Logs from "../../assets/screenshoots/SupplyFlow/Logs.png";
import Users from "../../assets/screenshoots/SupplyFlow/Users.png";
import InventoryApp from "../../assets/inventoryapp.png";
import InventoryLogo from "../../assets/Media/deploy.svg";

import { WorkData} from "../../vite-env";

export const inventorySupplyData: WorkData = {
    title: "Inventory Supply Flow App",
    desc: "from warehouse structuring and batch material tracking to equipment lifecycle management and user accountability.",
    imageUrl: InventoryApp,
    logo: InventoryLogo,
    link: "/inventory-supply",
    sections: [
        {
            title: "Inventory, Warehousing & User Control",
            desc: "Robust tools for organizing inventory, managing locations, and securing access.",
            sections: [
                {
                    description:
                        "Track and manage inventory across warehouses with sub-location support. Organize stock through batch entries and streamline transfers between locations.",
                    imageUrl: Warehouses,
                },
                {
                    description:
                        "Log tools and equipment with warranty tracking and lifecycle status—active, under maintenance, or out of service.",
                    imageUrl: Equipment,
                },
                {
                    description:
                        "Add materials in batches, update stock levels, and monitor quantities with expiry and source details.",
                    imageUrl: Materials,
                },
                {
                    description:
                        "Visualize warehouse capacity, stock health, and item distribution through a real-time dashboard.",
                    imageUrl: Dashboard,
                },
                {
                    description:
                        "Access detailed logs of all user activities—item additions, edits, and transfers—for full operational transparency and accountability.",
                    imageUrl: Logs,
                },
                {
                    description:
                        "Manage user accounts with role-based permissions to control access and protect sensitive data.",
                    imageUrl: Users,
                },
            ],
        },
    ],
};