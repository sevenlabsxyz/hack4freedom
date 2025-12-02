import { Badge } from "@/components/ui/badge";

function WhyEvento() {
  return (
    <section
      id="why-evento"
      className="py-20 md:py-32 bg-brand-ink text-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Powered By{" "}
            <img
              src="/evento-logo.svg"
              className="w-[80px] ml-2"
              alt="Evento Logo"
            />
          </Badge>
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
            Why We Care at Evento
          </h2>
          <div className="space-y-4 text-brand-mute font-mono max-w-xl mx-auto">
            <p>
              <strong className="text-pink-700">
                Hack4Freedom is organized by Evento
              </strong>
              , an events platform that helps communities gather and grow using
              tools like Bitcoin for payments and support.{" "}
              <strong className="text-primary">
                We believe events create movements and movements change lives.
              </strong>
            </p>
            <p>
              Evento is founded by a woman who has worked in Bitcoin for years
              and has seen how few women are represented in freedom tech. This
              imbalance limits ideas, limits innovation, and leaves out the
              people who often benefit the most.
            </p>
            <p>
              Women in the Global South make up the majority of the unbanked
              worldwide. They face barriers that Bitcoin can help solve, yet
              they are rarely included in building the tools themselves.
            </p>
            <p>
              Hack4Freedom is our effort to change that, by giving more women in
              the Global South the skills, support, and community they need to
              become builders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhyEvento };
