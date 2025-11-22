import { Globe, Ban, UserMinus, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function About() {
  return (
    <>
      <section id="about" className="py-20 md:py-32 bg-brand-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <Badge variant="outline" className="mb-4 bg-pink-700">
              The Mission
            </Badge>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
              What Hack4Freedom Is
            </h2>
            <div className="space-y-4 text-brand-mute font-mono max-w-xl">
              <p>
                Hack4Freedom is a two-week hybrid hackathon where women in
                Africa learn, build, and ship open-source tools using Bitcoin,
                Lightning, and eCash.
              </p>
              <p>
                It combines workshops, mentorship, and project-based learning so
                participants leave with real prototypes, repos, and
                collaborators.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Impact
          </Badge>
          <div className="grid gap-8 lg:grid-cols-3">
            <h2 className="row-span-2 text-3xl font-mono font-semibold lg:text-5xl text-white">
              Why It Matters
            </h2>
            <div>
              <Globe className="h-6 w-6 mb-3 text-white" />
              <h3 className="mb-2 text-xl font-medium font-mono text-white">
                ~3% globally
              </h3>
              <p className="text-muted-foreground font-mono">
                Only <strong>~3%</strong> of open-source contributors globally
                are women. Across Africa,{" "}
                <strong className="text-pink-700">
                  women represent less than 8%
                </strong>{" "}
                of technical talent pipelines.
              </p>
            </div>
            <div>
              <Ban className="h-6 w-6 mb-3 text-white" />
              <h3 className="mb-2 text-xl font-medium font-mono text-white">
                Majority unbanked
              </h3>
              <p className="text-muted-foreground font-mono">
                <strong className="text-pink-700">
                  Women make up the majority of the unbanked
                </strong>{" "}
                worldwide, disproportionately impacted by financial exclusion,
                censorship, and lack of access to secure communication.
              </p>
            </div>
            <div>
              <UserMinus className="h-6 w-6 mb-3 text-white" />
              <h3 className="mb-2 text-xl font-medium font-mono text-white">
                Never in the room
              </h3>
              <p className="text-muted-foreground font-mono">
                Bitcoin and freedom tech provide powerful tools for autonomy,
                but{" "}
                <strong className="text-pink-700">
                  women are almost never in the room
                </strong>{" "}
                when these tools are being designed.
              </p>
            </div>
            <div>
              <Sparkles className="h-6 w-6 mb-3 text-white" />
              <h3 className="mb-2 text-xl font-medium font-mono text-white">
                Shaping freedom tech
              </h3>
              <p className="text-muted-foreground font-mono">
                Hack4Freedom creates a dedicated, women-only space where African
                builders can gain the skills, mentorship, and confidence needed
                to{" "}
                <strong className="text-pink-700">
                  shape the future of freedom tech
                </strong>
                , not just consume it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { About };
