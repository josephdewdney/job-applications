import React from "react";
import { Cv } from "../../../data/schema.js";

type DateInput = string | null | undefined;

function formatDate(dateString: DateInput): string {
  if (!dateString || dateString.trim() === "") {
    return "Present";
  }

  const trimmed = dateString.trim();

  // Handle YYYY-MM format (e.g., "2024-10")
  if (trimmed.match(/^\d{4}-\d{2}$/)) {
    const parts = trimmed.split("-");
    const year = parts[0];
    const month = parts[1];
    if (year && month) {
      const date = new Date(parseInt(year), parseInt(month) - 1);
      return date.toLocaleDateString("en-EN", {
        year: "numeric",
        month: "short",
      });
    }
  }

  // Handle YYYY format (e.g., "2016")
  if (trimmed.match(/^\d{4}$/)) {
    return trimmed;
  }

  // Fallback for any other format
  return trimmed;
}

function formatDateRange(
  startDate: DateInput,
  endDate: DateInput
): string {
  const formattedStart = formatDate(startDate);

  if (!endDate || endDate.trim() === "") {
    return `${formattedStart} - Present`;
  }

  const formattedEnd = formatDate(endDate);
  return `${formattedStart} - ${formattedEnd}`;
}

interface CVProps {
  cv: Cv;
}

export function CVComponent({ cv }: CVProps) {
  return (
    <>
      <header className="text-center">
        <h1 className="text-2xl font-bold">{cv.basics.name}</h1>
        <div className="mt-1 text-sm">
          <span className="mr-2">{cv.basics.email}</span>
          <span className="mr-2">| {cv.basics.phone}</span>
          <span>
            | {cv.basics.address.street}, {cv.basics.address.zip}{" "}
            {cv.basics.address.city}
          </span>
        </div>
      </header>
      {cv.basics.summary && (
        <section>
          <div className="text-sm">{cv.basics.summary}</div>
        </section>
      )}
      <section>
        <h2 className="border-b text-lg font-bold tracking-wide mb-4">Experience</h2>
        {cv.work.map((job, i) => (
          <article key={`work-${i}`} className="mb-4 text-sm">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-sm/6 font-semibold">{job.name}</span>
                <div className="text-sm font-normal mb-1">{job.position}</div>
              </div>
              <div className="text-right min-w-32">
                <div className="font-normal text-sm">
                  {formatDateRange(job.startDate, job.endDate)}
                </div>
              </div>
            </div>
            {job.highlights && job.highlights.length > 0 && (
              <ul className="list-disc ml-6">
                {job.highlights.map((hl, j) => (
                  <li key={`work-hl-${i}-${j}`}>{hl}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>
      <section>
        <h2 className="border-b text-lg font-bold tracking-wide mb-4">Education</h2>
        {cv.education.map((edu, i) => (
          <article key={`edu-${i}`} className="mb-4 text-sm">
            <div className="flex justify-between items-baseline">
              <div>
                <span className="text-sm/6 font-semibold">{edu.institution}</span>
                <div className="text-sm font-normal mb-1">
                  {edu.studyType} in {edu.area}
                </div>
              </div>
              <div className="text-right min-w-32">
                <div className="font-normal text-sm">
                  {formatDateRange(edu.startDate, edu.endDate)}
                </div>
              </div>
            </div>
            {edu.awards && edu.awards.length > 0 && (
              <div className="text-xs">Awards: {edu.awards.join(", ")}</div>
            )}
          </article>
        ))}
      </section>
      <section>
        <h2 className="border-b text-lg font-bold tracking-wide mb-4">Other</h2>
        {cv.languages && (
          <div>
            <span className="text-sm/6 font-semibold">Languages:</span>
            <span className="ml-2 text-sm">
              {cv.languages.map((lang) => `${lang.language} (${lang.fluency})`).join(", ")}
            </span>
          </div>
        )}
      </section>
    </>
  );
}