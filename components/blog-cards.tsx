"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface BlogCardsProps {
  items?: GalleryItem[];
}

const BlogCards = ({
  items = [
    {
      id: "item-1",
      title:
        "Introducing Hack4Freedom: Empowering Women in Nigeria to Build with Freedom Tech",
      summary:
        "Discover how Hack4Freedom is training and empowering women developers in Nigeria to build open-source freedom technology using Bitcoin and other cutting-edge tools.",
      url: "https://evento.so/blog/introducing-hack4freedom-empowering-women-in-nigeria-to-build-with-freedom-tech",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title:
        "When Women Build, Freedom Follows: Meet the Hackers of Hack4Freedom",
      summary:
        "Meet the incredible women hackers who are building the future of freedom technology and learn about their inspiring journeys in the Hack4Freedom program.",
      url: "https://evento.so/blog/when-women-build-freedom-follows-meet-the-hackers-of-hack4freedom",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title:
        "Building a Decentralized Future: Lightning Network Applications in Africa",
      summary:
        "Explore how African developers are leveraging the Lightning Network to create instant, low-cost payment solutions that empower communities.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title:
        "From Zero to Bitcoin Developer: A Beginner's Journey at Hack4Freedom",
      summary:
        "Follow along as a complete beginner shares their transformation into a confident Bitcoin developer through the Hack4Freedom program.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title:
        "Open Source & Freedom Tech: Why It Matters for Financial Inclusion",
      summary:
        "Understanding the critical role of open-source development in building accessible, transparent financial tools for underserved communities.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-6",
      title: "eCash Protocols Explained: Privacy-Preserving Digital Payments",
      summary:
        "A deep dive into how eCash protocols work and their potential to revolutionize digital privacy and financial freedom.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
    {
      id: "item-7",
      title: "Mentorship Matters: How Expert Guidance Accelerates Tech Growth",
      summary:
        "Hear from mentors and mentees about the transformative power of one-on-one guidance in mastering complex freedom technologies.",
      url: "#",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
    },
  ],
}: BlogCardsProps) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section id="blog" className="pb-20 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: true,
                },
              },
            }}
            className="relative w-full"
          >
            <CarouselContent className="hide-scrollbar">
              {items.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="pl-4 sm:pl-6 lg:pl-8 max-w-[365px] md:max-w-[452px]"
                >
                  <a
                    href={item.url}
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="aspect-video flex overflow-clip rounded-3xl">
                        <div className="flex-1">
                          <div className="relative h-full w-full">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl group-hover:text-brand-green transition-colors">
                      {item.title}
                    </div>
                    <div className="text-muted-foreground mb-8 line-clamp-2 text-sm md:mb-12 md:text-base lg:mb-9">
                      {item.summary}
                    </div>
                    <div className="flex items-center text-sm">
                      Read more{" "}
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { BlogCards };
