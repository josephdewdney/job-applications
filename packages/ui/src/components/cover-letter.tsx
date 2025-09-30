import React from "react";
import { Basics, CoverLetter as CoverLetterType } from "../../../data/schema.js";

interface CoverLetterProps {
  basics: Basics;
  coverLetter: CoverLetterType;
}

export function CoverLetter({ basics, coverLetter }: CoverLetterProps) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-left mb-8">
        <div className="text-sm">
          <div>{basics.name}</div>
          <div>{basics.address.street}</div>
          <div>
            {basics.address.zip} {basics.address.city}
          </div>
          <div>{basics.email}</div>
          <div>{basics.phone}</div>
        </div>
      </header>

      <div className="mb-6 text-sm text-right">
        {new Date().toLocaleDateString("de-DE", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>

      <div className="mb-4 text-sm font-semibold">
        Re: {coverLetter.position}
      </div>

      <div className="text-sm space-y-4">
        <p>{coverLetter.content.greeting}</p>

        {coverLetter.content.paragraphs.map((paragraph: string, index: number) => (
          <p key={index}>{paragraph}</p>
        ))}

        <p>
          {coverLetter.content.closing}
          <br />
          {coverLetter.content.signature}
        </p>
      </div>
    </div>
  );
}