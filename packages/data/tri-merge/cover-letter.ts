import { CoverLetter } from "../cv";
import { jobDescription } from "./job-description";

export const coverLetter: CoverLetter = {
  company: {
    name: "Tri.Merge GmbH",
    address: {
      street: "Fallenbrunnen 14",
      city: "Friedrichshafen",
      zip: "88045",
      country: "DE",
    },
  },
  position: jobDescription.title,
  content: {
    greeting: "Dear Hiring Team,",
    paragraphs: [
      "I am writing to express my interest in the Frontend Developer - Visualisierung & UX position at Tri.Merge GmbH.",
      "I was excited to come across this opportunity as it perfectly aligns with my interests, skills and career aspirations. I have over 6 years of experience in frontend development building web applications, dashboards, and data visualizations with React and TypeScript. During my time at ZF, I have designed and developed a web application to visualize the autonomous vehicle data, the frontend for a project management web application and a dashboard and data analytics focused component library for use within the autonomous driving domain. I have worked extensively with React, but I have focused on the fundamentals including HTML, CSS, and JavaScript, so I could easily adapt to any frontend framework.",
      "I am particularly drawn to Tri.Merge's company culture, which emphasizes 'Teamfokussierung' and 'Digitales Vordenkertum', as well as its focus on exciting industries like automotive and sensor systems for object detection.",
      "I would welcome the opportunity to discuss how my frontend and data visualization skills can support Tri.Merge's continued success. Thank you for considering my application. Please feel free to contact Michael Amann at Tri.Merge, who can provide additional insight into my professional capabilities and character.",
    ],
    closing: "Kind regards,",
    signature: "Joseph William Dewdney",
  },
} as const;
