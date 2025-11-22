import { Card, CardContent } from "@/components/ui/card";
import { Users, Code, UserCheck, Venus, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statsData = [
  {
    icon: Venus,
    heading: "20",
    text: "women trained",
  },
  {
    icon: Code,
    heading: "8",
    text: "open-source prototypes",
  },
  {
    icon: Sparkles,
    heading: "15",
    text: "mentors",
  },
];

function Work2025() {
  return (
    <section id="work-2025" className="pt-20 md:pt-32 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Last Year
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-12 md:mb-16 text-center">
          2025 Series
        </h2>

        {/* Stats Row */}
        <div className="pb-10 pt-10 md:mb-4">
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {statsData.map(({ icon: Icon, heading, text }, i) => (
              <Card
                key={`stat${i}`}
                className="hover:border-primary rounded-3xl border-2 p-10 transition hover:-translate-y-3 bg-card"
              >
                <CardContent className="block p-0">
                  <div className="flex items-center gap-7">
                    <div className="h-14 w-14 flex items-center justify-center overflow-hidden rounded-full border">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div className="mt-6 text-6xl font-semibold leading-tight">
                    {heading}
                  </div>
                  <p className="mb-5 max-w-52 text-lg font-medium whitespace-nowrap text-muted-foreground">
                    {text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { Work2025 };
