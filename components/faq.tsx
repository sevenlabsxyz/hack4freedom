"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  heading?: string;
  description?: string;
  items?: FaqItem[];
}

const faqs = [
  {
    id: "1",
    question: "Who can apply?",
    answer:
      "Women 18+ in Africa with basic development skills or strong motivation to learn. No prior Bitcoin experience is required.",
  },
  {
    id: "2",
    question: "Do I need to already know Bitcoin?",
    answer:
      "No! Hack4Freedom is designed for beginners. We provide intensive training on Bitcoin, Lightning, and eCash during the program.",
  },
  {
    id: "3",
    question: "Is the program free?",
    answer:
      "Yes, participation in Hack4Freedom is free. We cover all workshop and event costs.",
  },
  {
    id: "4",
    question: "Do I need a team?",
    answer:
      "No, you can apply individually. We'll help you form teams during the kickoff event, or you can work solo if you prefer.",
  },
  {
    id: "5",
    question: "Can I join remotely?",
    answer:
      "Hack4Freedom is hybrid. The kickoff and demo day are in-person, but Week 2 building and mentorship sessions can be done remotely.",
  },
  {
    id: "6",
    question: "What stack can I use?",
    answer:
      "You can use any technology stack you're comfortable with. The focus is on building tools that integrate with Bitcoin, Lightning, or eCash protocols.",
  },
  {
    id: "7",
    question: "How are winners selected?",
    answer:
      "Winners are selected by a panel of judges based on technical execution, innovation, open-source contribution, and potential real-world impact.",
  },
  {
    id: "8",
    question: "Are projects open-source?",
    answer:
      "Yes! All projects built during Hack4Freedom must be open-source. This is a core value of the program.",
  },
];

export const FAQ = ({
  heading = "Frequently asked questions",
  description = "Find answers to common questions about Hack4Freedom.",
  items = faqs,
}: FaqProps) => {
  return (
    <section id="faq" className="py-32">
      <div className="container space-y-16 mx-auto px-4 md:px-0">
        <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center items-center">
          <Badge variant="outline" className="mb-4 bg-pink-700">
            Learn More
          </Badge>
          <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl text-center">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg text-center">
            {description}
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto w-full lg:max-w-3xl"
        >
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                  {item.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="sm:mb-1 lg:mb-2">
                <div className="text-muted-foreground lg:text-lg">
                  {item.answer}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
