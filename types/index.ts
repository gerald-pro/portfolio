export interface Project {
    slug: string;
    title: string;
    description: string;
    content?: string; // For now we can use a long string or markdown
    techStack: {
        backend?: string[];
        frontend?: string[];
        mobile?: string[];
        services?: string[];
        tools?: string[];
        [key: string]: string[] | undefined;
    };
    features?: {
        title: string;
        items: string[];
    }[];
    links?: {
        demo?: string;
        repo?: string;
    };
    images?: {
        cover: string;
        gallery?: string[];
    };
    date?: string;
    role?: string;
    isFeatured?: boolean;
}
