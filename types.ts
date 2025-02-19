export interface Experience {
  name: string;
  href: string;
  title?: string;
  logo: string;
  start?: string;
  end?: string | null;
  description?: string[];
  links?: {
    name: string;
    href: string;
    icon: string;
  }[];
}
