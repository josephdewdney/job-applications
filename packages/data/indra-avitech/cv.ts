import { Cv } from "../../cv";
import { personalBasics } from "../personal";

export const CV: Cv = {
  basics: {
    ...personalBasics,
    summary:
      "Senior Frontend Software Engineer with over 5 years of experience designing, developing, testing, deploying, and maintaining high-quality React and TypeScript applications.",
  },
  work: [
    {
      name: "ZF Friedrichshafen AG",
      position: "Senior Software Engineer",
      startDate: "2024-10",
      endDate: "",
      highlights: [
        "Led frontend development of a project management application in React and TypeScript, centralizing access to documentation, deployment pipelines, code repositories, APIs, team contacts, and more, significantly improving team productivity and reducing project onboarding time across multiple departments.",
        "Created and took full ownership of a React component library, adopted by multiple teams, improving developer experience and ensuring UI consistency and performance across projects.",
      ],
    },
    {
      name: "ZF Friedrichshafen AG (through Modis GmbH)",
      position: "Software Engineer",
      startDate: "2019-11",
      endDate: "2024-09",
      highlights: [
        "Led development of a web application using React and Python to visualize and analyze sensor and algorithm data from autonomous vehicles focusing on high performance and scalability.",
        "Worked with Webpack, NPM, and Yarn to manage and optimize frontend builds and dependencies.",
        "Implemented automated testing and CI/CD pipelines for robust deployments.",
        "Implemented visualizations with React and WebGL, capable of rendering millions of data points.",
      ],
    },
    {
      name: "Hannover Rück SE",
      position: "Mathematician / Software Engineer",
      startDate: "2016-12",
      endDate: "2019-09",
      highlights: [
        "Developed and maintained reporting software using Python and Excel, supporting critical business decision-making processes.",
        "Designed data models for processing and analyzing large volumes of risk assessment data.",
        "Optimized PostgreSQL database performance to handle complex financial data analytics and reporting workflows.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Sussex",
      area: "Theoretical Physics",
      studyType: "Master's Degree with Honors",
      startDate: "2015-09",
      endDate: "2016-09",
      awards: [
        "Chancellor's Scholarship",
        "Sir William McCrea Prize (Top of the Year)",
      ],
    },
    {
      institution: "University of Gothenburg",
      area: "Masters of Complex Systems",
      studyType: "Erasmus Semester",
      startDate: "2013-09",
      endDate: "2014-01",
    },
    {
      institution: "University of Sussex",
      area: "Mathematics",
      studyType: "First Class Bachelor Degree",
      startDate: "2010-09",
      endDate: "2013-07",
    },
  ],
  skills: [
    {
      name: "React",
      keywords: ["React", "React Components", "React Hooks", "Frontend"],
    },
    {
      name: "TypeScript",
      keywords: ["TypeScript", "JavaScript", "Typed JavaScript"],
    },
    { name: "Webpack", keywords: ["Webpack", "Module Bundler"] },
    { name: "NPM", keywords: ["NPM", "Node Package Manager"] },
    { name: "Yarn", keywords: ["Yarn", "Package Management"] },
    { name: "CSS Modules", keywords: ["CSS Modules", "Scoped CSS"] },
    { name: "SASS", keywords: ["SASS", "CSS Preprocessor"] },
    { name: "Ant Design", keywords: ["Ant Design", "Component Library"] },
    {
      name: "Component Libraries",
      keywords: ["Component Libraries", "UI Libraries"],
    },
    {
      name: "Frontend Architecture",
      keywords: ["Frontend Architecture", "Design Patterns"],
    },
    { name: "UI/UX", keywords: ["UI/UX", "User Experience", "User Interface"] },
    {
      name: "Testing",
      keywords: ["Testing", "Unit Testing", "Integration Testing"],
    },
    {
      name: "CI/CD",
      keywords: ["CI/CD", "Continuous Integration", "Continuous Deployment"],
    },
    { name: "Agile/Scrum", keywords: ["Agile", "Scrum", "Team Collaboration"] },
    {
      name: "Cross-functional Collaboration",
      keywords: ["Cross-functional Teams", "Collaboration"],
    },
    {
      name: "Performance Optimization",
      keywords: ["Performance", "Optimization", "Efficient Code"],
    },
    { name: "Code Review", keywords: ["Code Review", "Quality Assurance"] },
    {
      name: "Maintainable Code",
      keywords: ["Maintainable Code", "Best Practices"],
    },
    { name: "Mobile Working", keywords: ["Mobile Working", "Remote Work"] },
    {
      name: "International Teams",
      keywords: ["International Teams", "Global Collaboration"],
    },
  ],
  languages: [
    {
      language: "German",
      fluency: "business fluent",
    },
    {
      language: "English",
      fluency: "native",
    },
  ],
} as const;
