// types/about.ts
export interface EducationItem {
    title: string;
    institution: string;
    period: string;
}

export interface SkillGroup {
    title: string;
    skills: string[];
}

export interface AboutData {
    bio: string[];
    education: EducationItem[];
    skills: SkillGroup[];
    profileImage: {
        src: string;
        alt: string;
    };
}
