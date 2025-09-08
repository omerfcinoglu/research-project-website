import React from "react";
import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import DefaultLayout from "@/layouts/default";
import ProjectFlow from "./ProjectFlow";
import { enTexts } from "@/i18n/en";

const s = enTexts.projectPage.sections;

const ProjectDetails: React.FC = () => {
  return (
    <DefaultLayout>
      <section className="flex items-center justify-center mt-4">
        <Card className="max-w-[1400px] w-full shadow-lg">
          <CardHeader className="flex gap-3 items-center justify-center">
            <div className="flex flex-col">
              <h4 className="text-3xl font-bold">{enTexts.projectPage.title}</h4>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left visual / flow */}
              <div className="lg:w-4/12">
                <ProjectFlow />
              </div>

              {/* Right content */}
              <div className="lg:w-8/12 prose prose-invert max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">{s.dataCollection.title}</h2>
                  <p className="text-lg">{s.dataCollection.p}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{s.detection.title}</h2>
                  <p className="mb-4 text-lg">{s.detection.p1}</p>
                  <div className="pl-6">
                    <h3 className="text-lg font-semibold mb-2">{s.detection.classesTitle}:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      {s.detection.classes.map((c) => <li key={c}>{c}</li>)}
                    </ul>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{s.trajectories.title}</h2>
                  <p className="text-lg">{s.trajectories.p}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{s.filter.title}</h2>
                  <p className="text-lg">{s.filter.p}</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">{s.risk.title}</h2>
                  <p className="text-lg">{s.risk.p}</p>
                </section>
              </div>
            </div>
          </CardBody>
        </Card>
      </section>
    </DefaultLayout>
  );
};

export default ProjectDetails;
