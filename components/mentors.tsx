import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CircleUser } from "lucide-react";

const mentors = [
  {
    name: "Brianna Honkawa d'Estries",
    title: "Founder, Evento",
    avatarUrl: "/mentors/brianna.jpg",
    profileUrl: "https://x.com/briimhd",
  },
  {
    name: "Lorraine Marcel",
    title: "Founder, BTCDADA",
    avatarUrl: "/mentors/lorraine-marcel.jpg",
    profileUrl: "https://x.com/marcelorraine",
  },
  {
    name: "Charlene Fadirepo",
    title: "Founder, Satoshi Sisterhood",
    avatarUrl: "/mentors/charlene-fadirepo.jpg",
    profileUrl: "https://x.com/CharFadirepo",
  },
  {
    name: "Mary Kate Fain",
    title: "Founder, Soapbox",
    avatarUrl: "/mentors/mk-fain.jpg",
    profileUrl: "https://x.com/mkay_fain",
  },
  {
    name: "Abubakar Nur Khalil",
    title: "CEO, BTrust",
    avatarUrl: "/mentors/abubakar-nur-khalil.jpg",
    profileUrl: "https://x.com/ihate1999",
  },
  {
    name: "Sarah White",
    title: "GM, Africa Bitcoiners",
    avatarUrl: "/mentors/sarah-white.jpg",
    profileUrl: "https://x.com/IamWhiteSarah",
  },
  {
    name: "Satoshee",
    title: "Lead Designer, Africa Bitcoiners",
    avatarUrl: "/mentors/satoshee.jpg",
    profileUrl: "https://x.com/_Satoshee",
  },
  {
    name: "Mubarak Aminu",
    title: "Co-Founder, Tapnob",
    avatarUrl: "/mentors/mubarak-aminu.jpg",
    profileUrl: "https://x.com/200okdeveloper",
  },
  {
    name: "Oyindamola Oladapo",
    title: "Bitcoin Open-Source Developer, Bitnob",
    avatarUrl: "/mentors/oyindamola-oladapo.jpg",
    profileUrl: "https://x.com/bitcoinzaddy",
  },
  {
    name: "Mogashni Naidoo",
    title: "Co-Founder, Bitcoin Design Community",
    avatarUrl: "/mentors/mogashni-naidoo.jpg",
    profileUrl: "https://x.com/MouxDesign",
  },
  {
    name: "Satsie",
    title: "Co-Organizer, Boston BitDevs",
    avatarUrl: "/mentors/satsie.jpg",
    profileUrl: "https://x.com/satsie",
  },
  {
    name: "D++",
    title: "Bitcoin engineer & educator, Lightning evangelist",
    avatarUrl: "/mentors/d++.jpg",
    profileUrl: "https://x.com/D_plus__plus",
  },
  {
    name: "Claire Parkinson",
    title: "Chief of Staff, ZBD",
    avatarUrl: "/mentors/claire-parkinson.jpeg",
    profileUrl: "https://www.linkedin.com/in/claire-p-75694594/",
  },
  {
    name: "Kelvin Isievwore",
    title: "Engineering Lead, BTrust",
    avatarUrl: "/mentors/kelvin-isievwore.jpg",
    profileUrl: "https://x.com/kelvinator05",
  },
  {
    name: "Stephanie Titcombe",
    title: "Program Lead, BTrust",
    avatarUrl: "/mentors/stephanie-titcombe.jpg",
    profileUrl: "https://x.com/StephTitcombe",
  },
  {
    name: "Sabina Waithira",
    title: "Co-Founder, Tando",
    avatarUrl: "/mentors/sabina-waithira.jpg",
    profileUrl: "https://x.com/waithiraah",
  },
];

function Mentors() {
  return (
    <section id="mentors" className="py-20 md:py-32 bg-brand-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-12 md:mb-16 text-center">
          &gt; 2025 Mentors & Speakers
        </h2>

        <div className="mt-14 grid gap-6 lg:mt-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mentors.map((mentor, index) => {
            const CardContent = (
              <>
                <Avatar className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 flex-shrink-0">
                  <AvatarImage src={mentor.avatarUrl} alt={mentor.name} />
                  <AvatarFallback>
                    <CircleUser className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground" />
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-sm md:text-base font-mono font-bold text-white mb-2">
                  {mentor.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground font-mono line-clamp-2">
                  {mentor.title}
                </p>
              </>
            );

            return mentor.profileUrl ? (
              <a
                key={index}
                href={mentor.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent rounded-3xl border-2 p-5 transition hover:border-primary hover:-translate-y-3 text-center block cursor-pointer flex flex-col h-full"
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={index}
                className="bg-accent rounded-3xl border-2 p-5 transition hover:border-primary hover:-translate-y-3 text-center cursor-pointer flex flex-col h-full"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export { Mentors };
