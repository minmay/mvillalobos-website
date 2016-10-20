import { ResumeEntry } from './entry/resume-entry.model';
import { Affiliation } from './affiliation.model';
import { Employment } from './employment.model';
import { Presentation } from './presentation.model'

export interface Resume {
    name: string;
    objective: string;
    email: string;
    mobile: string;
    history: Employment[];
    education: EducationEntry[];
    skills: string[];
    presentations?: Presentation[];
    affiliations?: Affiliation[];
}