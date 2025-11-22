import { Rocket, Code2, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Rocket,
    title: "Kickoff & Education",
    subtitle: "Week 1",
    description:
      "In-person day of talks and protocol deep dives. Bitcoin, Lightning, eCash fundamentals.",
  },
  {
    icon: Code2,
    title: "Building & Mentorship",
    subtitle: "Week 2",
    description:
      "Remote collaboration (standups, mentor office hours, code reviews).",
  },
  {
    icon: Sparkles,
    title: "Demo Day & Next Steps",
    subtitle: "Final",
    description:
      "In-person demo day, judging, prizes, and introductions to grant/job opportunities.",
  },
];

function Journey() {
  return (
    <section id="journey" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-brand-green font-mono mb-4 text-sm lg:text-base">
          THE JOURNEY
        </p>
        <h2 className="text-3xl font-mono font-bold text-white lg:text-4xl">
          &gt; The Hack4Freedom Journey
        </h2>
        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={index}
                className="bg-accent rounded-3xl border-2 p-5 transition hover:border-primary hover:-translate-y-3"
              >
                <span className="bg-background mb-8 flex size-12 items-center justify-center rounded-full">
                  <IconComponent className="size-6" />
                </span>
                <p className="text-brand-green font-mono text-sm mb-2">
                  {step.subtitle}
                </p>
                <h3 className="mb-2 text-xl font-mono font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-mono leading-7">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Journey };
