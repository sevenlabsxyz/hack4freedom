import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { EXTERNAL_LINKS } from "@/lib/constants";

const cities = [
  {
    city: "Lagos",
    country: "Nigeria",
    flag: "🇳🇬",
    date: "Q1 2026",
    buttonText: "Register for Lagos",
    buttonLink: EXTERNAL_LINKS.APPLY,
  },
  {
    city: "Nairobi",
    country: "Kenya",
    flag: "🇰🇪",
    date: "Q2 2026",
    buttonText: "Register for Nairobi",
    buttonLink: EXTERNAL_LINKS.APPLY,
  },
  {
    city: "Port Harcourt",
    country: "Nigeria",
    flag: "🇳🇬",
    date: "Q3 2026",
    buttonText: "Register for Port Harcourt",
    buttonLink: EXTERNAL_LINKS.APPLY,
  },
];

function Cities() {
  return (
    <section id="cities" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Locations
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-4 text-center">
          2026 Cities
        </h2>
        <p className="text-brand-mute font-mono text-center mb-12 md:mb-16">
          Three stops. One mission: women building freedom tech in Africa.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <a
              key={index}
              href={city.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="hover:border-primary rounded-3xl border-2 p-10 transition hover:-translate-y-3 bg-card relative">
                <CardContent className="p-0 flex flex-col min-h-[180px]">
                  <div className="">
                    <Badge variant="outline" className="mb-4 bg-pink-700">
                      {city.date}
                    </Badge>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl md:text-2xl font-mono font-bold text-white mb-6">
                      {city.flag} {city.city},<br />
                      <span className="pl-10">{city.country}</span>
                    </h3>
                  </div>

                  <Button
                    variant="outline"
                    className="border-brand-green text-white font-mono group-hover:bg-brand-green/10 pointer-events-none mt-auto w-full"
                  >
                    {city.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Cities };
