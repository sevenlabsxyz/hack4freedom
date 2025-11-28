"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, UserPlus, Heart, Users } from "lucide-react";
import React, { useState } from "react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { EXTERNAL_LINKS } from "@/lib/constants";

const cards = [
  {
    title: "Apply",
    description:
      "Women 18+ in Africa with basic dev skills or strong motivation to learn. No prior Bitcoin experience required.",
    icon: UserPlus,
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
    primaryButton: {
      text: "Apply Now",
      link: EXTERNAL_LINKS.APPLY,
    },
  },
  {
    title: "Sponsor",
    description:
      "Help train women builders and support open-source freedom tech. Benefits include brand visibility, access to talent, alignment with women in Bitcoin, and presence at Demo Day.",
    icon: Heart,
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10",
    primaryButton: {
      text: "Become a Sponsor",
      link: EXTERNAL_LINKS.SPONSOR,
    },
  },
  {
    title: "Mentor",
    description:
      "Share your expertise in Bitcoin, Lightning, eCash, UX, security, or open-source. Help guide participants through their projects.",
    icon: Users,
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
    primaryButton: {
      text: "Become a Mentor",
      link: EXTERNAL_LINKS.SPEAKER,
    },
  },
];

function GetInvolved() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="get-involved"
      className="py-20 md:py-32 bg-brand-ink overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Join Us
          </Badge>
        </div>
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-12 md:mb-16 text-center">
          Get Involved
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative block h-full w-full p-2"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {hoveredIndex === index && (
                  <motion.span
                    className={cn(
                      "absolute inset-0 block h-full w-full rounded-3xl",
                      card.bgColor,
                    )}
                    layoutId="hoverBackground"
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </AnimatePresence>

              <div className="bg-brand-ink relative z-20 flex h-full flex-col items-center justify-center gap-2 rounded-3xl p-8 text-center border-2 border-brand-mute/20">
                <div
                  className={cn(
                    "bg-brand-ink/50 size-16 mb-4 flex items-center justify-center rounded-full p-3",
                    card.color,
                  )}
                >
                  <card.icon className="size-8" />
                </div>
                <h3 className="text-2xl font-mono font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-brand-mute font-mono mb-6 text-sm">
                  {card.description}
                </p>

                <div className="flex flex-col gap-3 w-full mt-auto">
                  <a
                    href={card.primaryButton.link}
                    target={
                      card.primaryButton.link.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      card.primaryButton.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={cn(
                      "group/btn px-6 py-3 border-2 font-mono font-semibold rounded-xl hover:bg-opacity-20 transition-all text-center text-sm flex items-center justify-center gap-2",
                      card.color,
                      `border-current`,
                    )}
                  >
                    {card.primaryButton.text}
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { GetInvolved };
