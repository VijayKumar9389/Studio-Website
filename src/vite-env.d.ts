/// <reference types="vite/client" />

// Define the structure for project data.ts
export interface WorkData {
    title: string;
    desc?: string;
    imageUrl?: string;
    logo?: string;
    link: string;
    sections: WorkSection[];
}

// Define the structure for each section within a project
export interface WorkSection {
    title: string;
    desc: string;
    sections: WorkSectionData[];
}

// Define the structure for individual subsections
export interface WorkSectionData {
    description: string;
    imageUrl: string;
}