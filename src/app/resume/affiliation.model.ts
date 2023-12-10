import { Description } from "./description.model";

export interface Affiliation {
  id: string;
  name: string;
  location: string;
  logo: string;
  start: string;
  end: string;
  title: string;
  description: Description[];
}
