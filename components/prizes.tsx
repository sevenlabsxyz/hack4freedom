import { Trophy, BookOpen, Users, Globe, Rocket, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const prizes = [
  {
    icon: Trophy,
    title: "$5,000 Prize Pool",
    description: "Top teams compete for cash prizes to fund their projects.",
  },
  {
    icon: BookOpen,
    title: "Intensive Training",
    description: "Deep dives into Bitcoin, Lightning, and eCash protocols.",
  },
  {
    icon: Users,
    title: "Access to Mentors",
    description: "Learn from experienced builders from around the world.",
  },
  {
    icon: Globe,
    title: "Community Access",
    description: "Join a network of African women developers and designers.",
  },
  {
    icon: Rocket,
    title: "Real-World Opportunities",
    description:
      "Connections to jobs, grants, and fellowships in freedom tech.",
  },
  {
    icon: Github,
    title: "Open-Source Experience",
    description:
      "Build real projects with GitHub repos and contribution flows.",
  },
];

function Prizes() {
  return (
    <section id="prizes" className="py-20 md:py-32 bg-brand-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            What You Win
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-12 md:mb-16 text-center">
          Prizes & Benefits
        </h2>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          {prizes.map((prize, index) => {
            const IconComponent = prize.icon;
            return (
              <div
                key={index}
                className="bg-accent rounded-3xl border-2 p-5 transition hover:border-primary hover:-translate-y-3"
              >
                <span className="bg-background mb-8 flex size-12 items-center justify-center rounded-full">
                  <IconComponent className="size-6 text-primary" />
                </span>
                <h3 className="mb-2 text-xl font-mono font-bold text-white">
                  {prize.title}
                </h3>
                <p className="text-muted-foreground font-mono leading-7">
                  {prize.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Prizes };
