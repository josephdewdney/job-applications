import { z } from "zod";

export const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string().optional(),
  zip: z.string(),
  country: z.string(),
});

export const companySchema = z.object({
  name: z.string(),
  address: addressSchema,
});

export const basicsSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: addressSchema,
  summary: z.string().optional(),
});

export const workExperienceSchema = z.object({
  name: z.string(),
  position: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  highlights: z.array(z.string()),
});

export const educationSchema = z.object({
  institution: z.string(),
  area: z.string(),
  studyType: z.string(),
  startDate: z.string(),
  endDate: z.string().optional(),
  awards: z.array(z.string()).optional(),
});

export const languageSchema = z.object({
  language: z.string(),
  fluency: z.string(),
});

export const cvSchema = z.object({
  basics: basicsSchema,
  work: z.array(workExperienceSchema),
  education: z.array(educationSchema),
  languages: z.array(languageSchema).optional(),
});

export const coverLetterSchema = z.object({
  company: companySchema,
  position: z.string(),
  content: z.object({
    greeting: z.string(),
    paragraphs: z.array(z.string()),
    closing: z.string(),
    signature: z.string(),
  }),
});

// Type exports
export type Address = z.infer<typeof addressSchema>;
export type Company = z.infer<typeof companySchema>;
export type Basics = z.infer<typeof basicsSchema>;
export type WorkExperience = z.infer<typeof workExperienceSchema>;
export type Education = z.infer<typeof educationSchema>;
export type Language = z.infer<typeof languageSchema>;
export type Cv = z.infer<typeof cvSchema>;
export type CoverLetter = z.infer<typeof coverLetterSchema>;
