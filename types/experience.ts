export interface Experience {
    id: string;
    role: string;
    company: string;
    location?: string;
    modality?: "Remote" | "On-site" | "Hybrid";
    startDate: string;
    endDate: string;
    description: string;
    responsibilities: string[];
}
