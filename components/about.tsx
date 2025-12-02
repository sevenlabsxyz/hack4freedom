"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, Ban, UserMinus, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const images = [
  "/about/about-5.webp",
  "/about/about-1.webp",
  "/about/about-2.webp",
  "/about/about-3.webp",
  "/about/about-4.webp",
  "/about/about-6.webp",
  "/about/about-7.webp",
  "/about/about-8.webp",
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (diff > threshold) {
      // Swipe left - next image
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -threshold) {
      // Swipe right - previous image
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      <section id="about" className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left column - Text content */}
            <div>
              <Badge variant="outline" className="mb-4 bg-pink-700">
                The Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-mono font-bold text-white mb-6">
                What is Hack4Freedom
              </h2>
              <div className="space-y-4 text-brand-mute font-mono">
                <p>
                  Hack4Freedom is a two-week, women-only hybrid hackathon where
                  developers in the Global South learn, build, and ship
                  open-source freedom tools using Bitcoin, Lightning, Nostr, and
                  eCash.
                </p>
                <p>
                  It combines hands-on workshops, global mentorship, and
                  project-based building so participants leave with real
                  prototypes, repos, contributors, and a community of female
                  builders.
                </p>
              </div>
            </div>

            {/* Right column - Image Carousel */}
            <div className="relative">
              {/* 16:9 aspect ratio container */}
              <div
                className="relative aspect-video rounded-2xl overflow-hidden bg-brand-mute/10"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt={`Hack4Freedom ${currentIndex + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>

              {/* Dot indicators */}
              <div className="flex justify-center gap-2 mt-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-colors",
                      currentIndex === index
                        ? "bg-pink-700"
                        : "bg-brand-mute/50 hover:bg-brand-mute",
                    )}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
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
                are women. Across the Global South,{" "}
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
                Hack4Freedom creates a dedicated, women-only space where
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
