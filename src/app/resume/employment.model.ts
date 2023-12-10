import {Description} from "./description.model";

export interface Employment {
  id: string;
  name: string;
  location: string;
  logo: string;
  start: string;
  end: string;
  title: string;
  description: Description[];
}
