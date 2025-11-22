import { Trophy, Medal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const winners = [
  {
    placement: "1st Place",
    icon: Trophy,
    projectName: "LightningO",
    projectSummary:
      "A Lightning + Nostr platform connecting global sponsors with local builders through bounties, gigs, and grants.",
    teamName: "Aaliyah Junaid",
    videoLink: "#",
  },
  {
    placement: "2nd Place",
    icon: Medal,
    projectName: "BitSave",
    projectSummary:
      "A Bitcoin savings app that blends group goals, Nostr chats, and smart coaching for better financial autonomy.",
    teamName: "Kareema Muhammad Hussaini & Amrah Uthman Sali",
    videoLink: "#",
  },
  {
    placement: "3rd Place",
    icon: Star,
    projectName: "Bitstra",
    projectSummary:
      "An everyday Lightning app for buying airtime, data, and paying bills without banks.",
    teamName: "Divine Macaulay & Dinah Macaulay",
    videoLink: "#",
  },
];

function Winners() {
  return (
    <section id="winners" className="py-20 md:py-32 bg-brand-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-12 md:mb-16 text-center">
          &gt; 2025 Winning Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {winners.map((winner, index) => {
            const IconComponent = winner.icon;
            return (
              <a key={index} href={winner.videoLink} className="group block">
                <Card className="hover:border-primary rounded-3xl border-2 p-10 transition hover:-translate-y-3 bg-card">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-start">
                      <IconComponent className="w-12 h-12 text-brand-green" />
                    </div>
                    <h3 className="text-xl font-mono font-bold text-white mb-2">
                      {winner.placement}: {winner.projectName}
                    </h3>
                    <p className="text-brand-mute font-mono text-sm mb-4">
                      {winner.projectSummary}
                    </p>
                    <div className="mb-4">
                      <div className="text-brand-green font-mono text-sm font-semibold">
                        Winners: {winner.teamName}
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="border-brand-green text-white font-mono group-hover:bg-brand-green/10 pointer-events-none"
                    >
                      Watch their story →
                    </Button>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="px-6 py-3 border border-brand-mute text-brand-mute font-mono font-semibold rounded-xl hover:bg-brand-mute/10 transition-all"
          >
            Watch all demos →
          </a>
          <a
            href="https://tally.so/r/3jXA2a"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-brand-green text-brand-ink font-mono font-semibold rounded-xl hover:shadow-neon-green transition-all"
          >
            Apply to Hack4Freedom 2026
          </a>
        </div>
      </div>
    </section>
  );
}

export { Winners };
