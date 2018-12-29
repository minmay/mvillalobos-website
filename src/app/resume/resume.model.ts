import { Affiliation } from './affiliation.model';
import { Employment } from './employment.model';
import { Presentation } from './presentation.model'
import { EducationEntry} from './education-entry.model'

export interface Resume {
    name: string;
    introduction: string;
    objective: string;
    email: string;
    mobile: string;
    history: Employment[];
    education: EducationEntry[];
    skills: string[];
    presentations?: Presentation[];
    affiliations?: Affiliation[];
}
