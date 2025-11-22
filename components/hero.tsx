import {
  ArrowUpRight,
  BadgeDollarSign,
  Blocks,
  Clock2,
  HandFist,
  MapPinned,
  MoveRight,
  Sparkle,
  Sparkles,
  Venus,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 md:py-28 lg:py-36 mx-auto", className)}>
      <div className="container px-4 md:px-6 mx-auto pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link href="/">
            <Badge variant={"outline"} className="mb-4 bg-pink-700">
              Powered by
              <img
                src="/evento-logo.svg"
                className="w-[70px] ml-2"
                alt="Evento Logo"
              />
            </Badge>
          </Link>
          <h1 className="mt-4 text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-7xl lg:leading-[1.1]">
            When Women Build, <span className="text-[#25CB06]">Freedom</span>{" "}
            Follows{" "}
            <span className={`cursor blink-cursor`} aria-hidden="true">
              ▌
            </span>
          </h1>
          <div className="text-base md:text-lg font-mono text-brand-mute max-w-lg md:max-w-2xl leading-relaxed mt-4 md:mt-8 mb-8 mx-auto">
            Hack4Freedom trains female developers in Africa to build next-gen
            open-source freedom software using Bitcoin.
          </div>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="https://tally.so/r/3jXA2a" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="px-8 py-6 text-base font-medium">
                Apply to Hack4Freedom
                <ArrowUpRight className="ml-2 size-5" strokeWidth={1.5} />
              </Button>
            </Link>
            <Link href="mailto:mentors@evento.so">
              <Button
                size="lg"
                variant="secondary"
                className="px-8 py-6 text-base font-medium"
              >
                Become a Mentor
                <MoveRight className="ml-2 size-5" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="mailto:sponsor@evento.so">
              <Button
                size="lg"
                variant="link"
                className="px-8 py-6 text-base font-medium text-pink-700"
              >
                Sponsor Hack4Freedom
                <ArrowUpRight className="ml-2 size-5" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
          <div className="mt-10 lg:mt-12">
            <ul className="text-muted-foreground flex flex-wrap justify-center gap-6 text-sm lg:text-base">
              <li className="flex items-center gap-2.5 whitespace-nowrap text-brand-mute">
                <Venus className="text-pink-700 size-5" />
                Women-only
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap text-brand-mute">
                <MapPinned className="text-primary size-5" />
                Hybrid
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap text-brand-mute">
                <Clock2 className="text-pink-700 size-5" />2 Weeks
              </li>
              <li className="flex items-center gap-2.5 whitespace-nowrap text-brand-mute">
                <BadgeDollarSign className="text-primary size-5" />
                $5,000 in Prizes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero };
