export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  githubUrl?: string;
  githubStars?: number;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: "invoicee",
    title: "Invoicee",
    description:
      "A full-featured e-commerce platform with cart, checkout, and payment integration.",
    imageUrl:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "NextJS", "Supabase", "TailwindCSS", "Typescript"],
    category: "web",
    githubUrl: "https://github.com/SudhanshuBhagwat/invoicee",
    liveUrl: "https://invoicee.in",
  },
  {
    id: "express-lite",
    title: "Express Lite",
    description:
      "A fully type-safe ExpressJS like server built to understand how these NodeJS HTTP functions work. This will help understand how the type systems work across packages and how API's are designed to be iniuitive and developer friendly",
    imageUrl:
      "https://images.pexels.com/photos/5767327/pexels-photo-5767327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Typescript", "NodeJS", "Bunchee"],
    category: "backend",
    githubUrl: "https://github.com/SudhanshuBhagwat/express-lite",
  },
  {
    id: "tracker",
    title: "Habit Tracker",
    description: "A PWA for tracking habits and personal fitness goals.",
    imageUrl:
      "https://images.pexels.com/photos/3927393/pexels-photo-3927393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["React", "NextJS", "Firebase", "Typescript"],
    category: "web",
    githubUrl: "https://github.com/SudhanshuBhagwat/tracker",
    liveUrl: "https://tracker-kohl-ten.vercel.app/",
  },
  {
    id: "flutter-auto-search",
    title: "Flutter Auto Search",
    description:
      "Add a simple Auto Completing TextFeild to you project to spice up the user experience.",
    imageUrl:
      "https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    technologies: ["Flutter", "Dart"],
    category: "mobile",
    githubUrl: "https://github.com/SudhanshuBhagwat/auto_search",
    githubStars: 33,
  },
];
