export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  missions: string[] | null;
  details: string | null;
}

export interface Competence {
  id: string;
  category: string;
  color: string;
  items: string[];
  icon_key: string;
}

export interface DisplayExperience {
  id: string;
  company: string;
  location: string;
  role: string;
  date: string;
  fullDesc: string;
  missions: string[];
  tags: string[];
}
