interface JobDescription {
  title: string;
  subtitle: string;
  note: string;
  scope: {
    intro: string;
    responsibilities: string[];
  };
  profile: {
    intro: string;
    requirements: string[];
  };
  niceToHave: string[];
  offer: {
    intro: string;
    benefits: string[];
  };
  apply: {
    instructions: string;
    email: string;
  };
  about: string;
}

export const jobDescription: JobDescription = {
  title: "Frontend Developer - Visualisierung & UX",
  subtitle: "Permanent employee, Full-time · Friedrichshafen",
  note: "Bei uns zählt der Mensch, nicht das Geschlecht. Wir setzen auf Vielfalt, lehnen Diskriminierung ab und denken nicht in Kategorien.",
  scope: {
    intro: "Wir verbinden maschinennahe Kompetenz mit Daten-Intelligenz bis hin zu Agentic Workflows zur digitalen Transformation der deutschen Industrie durch smarte Lösungen. Du kannst uns dabei unterstützen!",
    responsibilities: [
      "Du entwickelst Web-Frontends für Applikationen, Dashboards & Agentic Workflows",
      "Du erstellst Designs und interaktiver Visualisierungen für IoT- und KI-Daten",
      "Zusammenarbeit mit Backend & Data-Teams für API-Integration",
      "UX-Optimierung für technische Nutzergruppen",
      "Pflege & Weiterentwicklung bestehender Anwendungen"
    ]
  },
  profile: {
    intro: "Du hast Spaß an komplexen, industrienahen und modernen Software-Projekten mitzuarbeiten? Du möchtest Verantwortung in der Frontend Software-Entwicklung und spannenden Industrie- und internen Projekten mit Daten-basierten Dashboards und User-Centric Websites übernehmen?\n\nDas sind super Voraussetzungen. Zudem bringst du noch mit:",
    requirements: [
      "Erfahrung mit React/Vue oder ähnlichen Frameworks",
      "Solide Kenntnisse in HTML, CSS, JavaScript/TypeScript",
      "Erfahrung im Umgang mit REST- und gRPC-APIs",
      "Grundverständnis für Datenvisualisierung und Data Story Telling",
      "Fähigkeit zur Dokumentation & Zusammenarbeit in interdisziplinären Teams"
    ]
  },
  niceToHave: [
    "Erfahrung in UI/UX Design",
    "Kenntnisse in State-Management (Redux, Zustand)",
    "Erfahrung mit Echtzeit-Datenvisualisierung",
    "Erfahrung mit Data Pipelines und Schnittstellen"
  ],
  offer: {
    intro: "Eine Festanstellung in einem wachsenden Startup mit attraktivem Gehalt.",
    benefits: [
      "Mitarbeit in einem motivierten Team mit hoher Affinität zu gemeinsamen Mittagspausen und neuen Technologien.",
      "Vielseitige und anspruchsvolle Aufgabe mit hohem Maß an Gestaltungsfreiheit. Du bekommst den Freiraum, eigene Ideen einzubringen und umzusetzen.",
      "Flexible Arbeitszeiten und die Möglichkeit zum mobilen Arbeiten sind für uns selbstverständlich.",
      "Weitere Benefits wie Küche mit Wasserspender, Kaffee for free, Bistro im Gebäude und eine moderne Arbeitsumgebung (z.B. elektrisch höhenverstellbarer Schreibtisch, ergonomischer Schreibtischstuhl)."
    ]
  },
  apply: {
    instructions: "Untenstehenden Link anklicken, Kontaktdaten eingeben und Lebenslauf hochladen oder Deinen Lebenslauf per E-Mail an MyNextStep@tri-merge.com senden\n\nWir freuen uns auf dich!\n\n[Apply for this job](link)",
    email: "MyNextStep@tri-merge.com"
  },
  about: "In unserem engagierten Team bekommst du den Gestaltungsspielraum, den du brauchst, um deine Projekte optimal voran zu bringen. Die Zusammenarbeit im Team spielt bei uns eine große Rolle, genau wie der offene und transparente Umgang. Zudem stehen wir für hohe Qualität und großes Fach-Knowhow. Aus diesen Gründen erhältst du bei uns die nötige Unterstützung dich weiter zu entwickeln, dein Potential auszuschöpfen und kein einzelnes Rädchen im Getriebe zu sein."
};
