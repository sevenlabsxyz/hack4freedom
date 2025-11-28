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
import { EXTERNAL_LINKS } from "@/lib/constants";

import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

const Hero = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 md:py-28 lg:py-36 mx-auto", className)}>
      <div className="container px-4 md:px-6 mx-auto pt-8">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="https://evento.so"
            target="_blank"
            rel="noopener noreferrer"
          >
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
          <div className="text-base md:text-lg font-mono text-brand-mute max-w-lg md:max-w-xl leading-relaxed mt-4 md:mt-8 mb-8 mx-auto">
            Hack4Freedom trains female developers in Africa to build next-gen
            open-source freedom software.
          </div>
          <div className="mt-10 flex justify-center max-w-[500px] mx-auto">
            <Link
              href={EXTERNAL_LINKS.APPLY}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                size="lg"
                className="w-full rounded-full px-12 py-6 text-base font-medium"
              >
                Apply to Hack4Freedom
                <ArrowUpRight className="ml-2 size-5" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[500px] mx-auto">
            <Link
              href={EXTERNAL_LINKS.SPEAKER}
              className="flex-1 w-full"
              target="_blank"
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-full px-8 py-6 text-base font-medium rounded-full"
              >
                Mentor
                <ArrowUpRight className="ml-2 size-5" strokeWidth={1.5} />
              </Button>
            </Link>
            <Link
              href={EXTERNAL_LINKS.SPONSOR}
              className="flex-1 w-full"
              target="_blank"
            >
              <Button
                size="lg"
                variant="secondary"
                className="w-full px-8 py-6 text-base font-medium rounded-full"
              >
                Sponsor
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
