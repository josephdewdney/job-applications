import { Cv } from "../../cv";
import { personalBasics } from "../personal";

export const CV: Cv = {
  basics: {
    ...personalBasics,
    summary:
      "Senior Software Engineer with more than 8 years of experience building software and analyzing data in Python and TypeScript/JavaScript.",
  },
  work: [
    {
      name: "ZF Friedrichshafen AG",
      position: "Senior Software Engineer",
      startDate: "2024-10",
      endDate: "",
      highlights: [
        "Led development of a web application using React and Python to visualize and analyze sensor and algorithm data from autonomous vehicles.",
        "Implemented visualizations with React and WebGL, capable of rendering millions of data points.",
        "Regularly presented technical solutions and shared expertise in team meetings, supporting continuous improvement.",
      ],
    },
    {
      name: "Modis GmbH",
      position: "Software Engineer",
      startDate: "2019-11",
      endDate: "2024-09",
      highlights: [
        "Built and maintained a component library in TypeScript and React, accelerating development and ensuring UI consistency across multiple projects.",
        "Developed automated test suites with Selenium, increasing code coverage and reducing production bugs.",
        "Containerized applications with Docker and managed CI/CD pipelines using Jenkins, resulting in faster deployments and improved team productivity.",
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
  skills: [],
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
