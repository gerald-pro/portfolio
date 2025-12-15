export interface Experience {
    id: string;
    role: string;
    company: string;
    location?: string;
    modality?: "Remoto" | "Presencial" | "Híbrido";
    startDate: string;
    endDate: string;
    description: string;
    responsibilities: string[];
}
