import { Cv } from "../cv";
import { personalBasics } from "../personal";

export const CV: Cv = {
  basics: {
    ...personalBasics,
    summary:
      "Frontend Developer with over 6 years of experience building web applications and data visualizations using React and TypeScript with a solid understanding of the fundamentals including HTML, CSS and JavaScript.",
  },
  work: [
    {
      name: "ZF Friedrichshafen AG",
      position: "Frontend Developer",
      startDate: "2024-10",
      endDate: "",
      highlights: [
        "Designed and developed the frontend of a project management web application using React, TypeScript, and Tailwind CSS to facilitate efficient project tracking and collaboration among cross-functional teams.",
        "Consumed REST APIs using Tanstack Query for efficient data fetching and state management in React applications collaborating closely with the backend team.",
        "Regularly presented technical solutions and shared expertise in team meetings, supporting knowledge sharing and continuous improvement.",
      ],
    },
    {
      name: "Modis GmbH",
      position: "Frontend Developer",
      startDate: "2019-11",
      endDate: "2024-09",
      highlights: [
        "Designed and developed a web application using React and TypeScript to visualize and analyze sensor and algorithm data from autonomous vehicles.",
        "Designed and developed a component library focused on dashboards and data visualization using React and TypeScript, implementing key UX principles to accelerate development and ensure consistent UI/UX.",
      ],
    },
    {
      name: "Hannover Rück SE",
      position: "Mathematician / Software Engineer",
      startDate: "2016-12",
      endDate: "2019-09",
      highlights: [
        "Developed data visualizations using Excel to support business decision-making.",
        "Optimized databases and database queries for efficient handling of complex financial data analytics and interactive reports.",
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
      studyType: "First Class Honours Degree",
      startDate: "2010-09",
      endDate: "2013-07",
    },
  ],
  languages: [
    {
      language: "German",
      fluency: "Business Fluent",
    },
    {
      language: "English",
      fluency: "Native",
    },
  ],
} as const;
