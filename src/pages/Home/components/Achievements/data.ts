import ImageTwo from "../../../../assets/fx1.png";
import ImageOne from "../../../../assets/fx3.png";
import ImageThree from "../../../../assets/fx2.png";
import ImageFour from "../../../../assets/fx4.png";

// Define the structure for project data.ts.ts
export interface WorkData {
    title: string;
    desc?: string;
    imageUrl?: string;
    link: string;
    bgGradient?: string;
}

export interface ProjectData {
    title: string;
    description: string;
    imageUrl: string;
}

export const project = [
    {
        title: 'Seamless Control',
        description:
            'Transform complex business workflows into intuitive experiences using custom modules. Navigate, update, and manage structured data with precision through clean interfaces and purpose-built tools tailored to your operations.',
        imageUrl: ImageTwo,
    },
    {
        title: 'Secure & Accurate',
        description:
            'Maintain consistent, error-free records with secure authentication, role-based access, and guided form inputs. Built-in validations, error checks, and automated updates prevent mistakes and ensure your data stays accurate and reliable.',
        imageUrl: ImageThree,
    },
    {
        title: 'Improved Collaboration',
        description:
            'Empower teams with real-time updates, responsive layouts, and shared access to live project data. Whether in the field or in the office, users can collaborate through interactive tables, advanced filters, and cloud-based storage — all from a single platform.',
        imageUrl: ImageFour,
    },
    {
        title: 'Enhanced Oversight',
        description:
            'Access real-time dashboards that consolidate key metrics, automate calculations, and visualize progress. Upload spreadsheets to instantly transform raw data into actionable insights enabling fast, informed decisions backed by real-time information.',
        imageUrl: ImageOne,
    },
]

