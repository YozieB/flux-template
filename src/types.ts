export type ExperienceType = {
    role?: string;
    dates: [Date, Date];
    companyName: string;
    description?: string;
    isCurrentPosition?: boolean | null;
};
export type LanguagesType = {
    name: string;
    level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
};
export type ContactsType = {
    link: string;
    name: string;
};
export type EducationType = {
    degree: string;
    university: string;
    dates: [Date, Date];
    isOngoing?: boolean;
};
export type TemplateProps = {
    firstName: string;
    lastName?: string;
    phone?: string;
    role?: string;
    skills?: string[];
    experience?: ExperienceType[];
    languages?: LanguagesType[];
    education?: EducationType[];
    socials?: ContactsType[];
    circle: {
    orange: string;
    purple: string;
    yellow: string
};
    grain: boolean;
};
