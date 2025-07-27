import {
    FaDatabase, FaExpandArrowsAlt,
    FaHandsHelping,
    FaLaptopCode,
    FaPencilRuler,
    FaProjectDiagram,
    FaRocket,
    FaServer, FaTools
} from "react-icons/fa";

export type Competency = {
    title: string;
    description: string[];
    Icon: React.ComponentType<{ size?: number }>;
};

export const competenciesData: Competency[] = [
    {
        title: "Consulting",
        description: [
            "Worked closely with clients to evaluate operations, identify inefficiencies, and deliver recommendations to optimize workflows and drive productivity."
        ],
        Icon: FaHandsHelping
    },
    {
        title: "Project Management",
        description: [
            "Planned and managed project roadmaps aligned with business goals and technical requirements, ensuring on-time delivery and clear communication."
        ],
        Icon: FaProjectDiagram
    },
    {
        title: "UI/UX",
        description: [
            "Designed responsive, accessible user interfaces with CSS, Tailwind, and MUI—crafting intuitive user flows that guide engagement across devices and screen sizes."
        ],
        Icon: FaPencilRuler
    },
    {
        title: "Front-End",
        description: [
            "Built scalable React applications with real-time API integrations, managed complex state using Redux, and implemented role-based access for secure data handling."
        ],
        Icon: FaLaptopCode
    },
    {
        title: "Back-End",
        description: [
            "Engineered secure and scalable REST APIs with Node.js, transforming business logic into optimized data structures and algorithms tailored to operational needs."
        ],
        Icon: FaServer
    },
    {
        title: "RDBMS",
        description: [
            "Designed normalized relational databases using PostgreSQL and Prisma to ensure consistent, accurate modeling of business-critical data."
        ],
        Icon: FaDatabase
    },
    {
        title: "Deployment",
        description: [
            "Deployed full-stack applications on AWS with CI/CD pipelines, managing infrastructure components such as S3, RDS, and Amplify for reliable, scalable delivery."
        ],
        Icon: FaRocket
    },
    {
        title: "Troubleshooting",
        description: [
            "Provided proactive monitoring and ongoing support to resolve issues quickly, apply hotfixes, and maintain performance of production systems."
        ],
        Icon: FaTools
    },
    {
        title: "Scaling",
        description: [
            "Architected systems designed to evolve with business growth—continuously refined based on user feedback, system usage patterns, and scalability demands."
        ],
        Icon: FaExpandArrowsAlt
    }
];