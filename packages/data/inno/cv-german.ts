import { Cv } from "../../cv";
import { personalBasics } from "../personal";

export const CV: Cv = {
  basics: {
    ...personalBasics,
    summary:
      "Senior Softwareentwickler mit über 8 Jahren Erfahrung in der Entwicklung von Software und Datenanalyse mit Python und TypeScript/JavaScript.",
  },
  work: [
    {
      name: "ZF Friedrichshafen AG",
      position: "Senior Softwareentwickler",
      startDate: "2024-10",
      endDate: "",
      highlights: [
        "Leitung der Entwicklung einer Webanwendung mit React und Python zur Visualisierung und Analyse von Sensor- und Algorithmusdaten autonomer Fahrzeuge.",
        "Implementieren von Visualisierungen mit React und WebGL, die Millionen von Datenpunkten verarbeiten können.",
        "Regelmäßige Präsentation von technischen Lösungen und knowledge sharing in Teambesprechungen.",
      ],
    },
    {
      name: "Modis GmbH",
      position: "Softwareentwickler",
      startDate: "2019-11",
      endDate: "2024-09",
      highlights: [
        "Erstellen und Pflegen einer component library in TypeScript und React zur Beschleunigung der Entwicklung und Sicherstellung der UI-Konsistenz über mehrere Projekte.",
        "Entwickeln von automatisierten Testsuiten mit Selenium, Erhöhung der Code-Abdeckung und Reduzierung von Produktionsfehlern.",
        "Containerisation von Anwendungen mit Docker und Verwalten von CI/CD-Pipelines mit Jenkins, was zu schnelleren Deployments und verbesserter Teamproduktivität führte.",
      ],
    },
    {
      name: "Hannover Rück SE",
      position: "Mathematiker / Softwareentwickler",
      startDate: "2016-12",
      endDate: "2019-09",
      highlights: [
        "Entwicklung und Pflege von Berichtssoftware mit Python und Excel zur Unterstützung kritischer Geschäftsentscheidungsprozesse.",
        "Entwurf von Datenmodellen für die Verarbeitung und Analyse großer Mengen von Risikobewertungsdaten.",
        "Optimierung der PostgreSQL-Datenbankleistung für komplexe Finanzdatenanalysen und Berichts-Workflows.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Sussex",
      area: "Theoretische Physik",
      studyType: "Master-Abschluss mit Auszeichnung",
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
      area: "Mathematik",
      studyType: "Bachelor-Abschluss mit Auszeichnung (First Class)",
      startDate: "2010-09",
      endDate: "2013-07",
    },
  ],
  skills: [],
  languages: [
    {
      language: "Deutsch",
      fluency: "Verhandlungssicher",
    },
    {
      language: "Englisch",
      fluency: "Muttersprache",
    },
  ],
} as const;
