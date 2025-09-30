"use client";

import { CV as cv } from "../../../packages/data/tri-merge/cv";
import { coverLetter } from "../../../packages/data/tri-merge/cover-letter";
import { Pages } from "components/pages";
import { CoverLetter } from "@workspace/ui/components/cover-letter";
import { CVComponent } from "@workspace/ui/components/cv";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs";

export default function App() {
  return (
    <Tabs defaultValue="cv" className="w-full">
      <TabsList className="grid w-full grid-cols-2 print:hidden">
        <TabsTrigger value="cv">CV</TabsTrigger>
        <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
      </TabsList>
      <TabsContent value="cv">
        <Pages key={cv.basics.email}>
          <CVComponent cv={cv} />
        </Pages>
      </TabsContent>
      <TabsContent value="cover-letter">
        <CoverLetter basics={cv.basics} coverLetter={coverLetter} />
      </TabsContent>
    </Tabs>
  );
}
