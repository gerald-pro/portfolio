import { experience } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  SectionSubtitle,
  SectionTitle,
} from "@/components/ui/section";

export default function ExperiencePage() {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>Professional Experience</SectionTitle>
        <SectionSubtitle>
          My journey in software development and technical leadership.
        </SectionSubtitle>
      </SectionHeader>

      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-500/30 before:to-transparent">
        {experience.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
          >
            {/* Timeline node */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-primary-500 bg-surface-950 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <CardTitle className="text-lg">
                    {item.role}
                  </CardTitle>
                  <time className="text-sm font-medium text-secondary-400">
                    {item.startDate} – {item.endDate}
                  </time>
                </div>

                <div className="text-sm text-slate-400">
                  {item.company}
                  {item.location && ` (${item.location})`}
                  {item.modality && (
                    <>
                      {" "}•{" "}
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1 py-0 h-5"
                      >
                        {item.modality}
                      </Badge>
                    </>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-2 text-sm text-slate-300">
                <p>{item.description}</p>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  {item.responsibilities.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Section>
  );
}
