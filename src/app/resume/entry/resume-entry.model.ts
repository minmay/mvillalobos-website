import { Description } from "../description.model";

export interface ResumeEntry {
    id: string;
    name: string;
    location: string;
    logo: string;
    start: string;
    end: string;
    title: string;
    description: Description[];
}
