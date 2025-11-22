"use client";

import { ArrowUpRight, Download, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Prizes", href: "#prizes" },
    { name: "2025 Series", href: "#work-2025" },
  ];

  const handleDownloadLogo = () => {
    const link = document.createElement("a");
    link.href = "/logo.png";
    link.download = "hack4freedom-logo.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-brand-ink text-white py-2 fixed w-full z-30">
      <div className="container mx-auto">
        <nav className="border-border w-full">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2 md:hidden">
                <img src="/logo.png" className="max-w-[250px]" />
              </div>

              <ContextMenu>
                <ContextMenuTrigger asChild>
                  <div className="">
                    <a href="/" className="hidden md:flex items-center gap-2">
                      <img src="/logo.png" className="max-w-[300px]" />
                    </a>
                  </div>
                </ContextMenuTrigger>
                <ContextMenuContent>
                  <ContextMenuItem onClick={handleDownloadLogo}>
                    <Download className="mr-2 h-4 w-4" />
                    Download PNG (Original)
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>

              <div className="hidden items-center space-x-2 md:space-x-4 md:flex">
                {navLinks.map((link) => (
                  <Button variant={"link"} asChild key={link.name}>
                    <Link
                      href={link.href}
                      className="-mt-1 !ml-4  !text-brand-mute"
                    >
                      {link.name}
                    </Link>
                  </Button>
                ))}
                <Button variant={"link"} className="-mt-1 !ml-4">
                  Apply Now
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              <div className="md:hidden flex items-center gap-2">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                  <SheetTrigger asChild>
                    <Menu className="h-6 w-6" />
                  </SheetTrigger>
                  <SheetContent side="top" className="h-screen">
                    <SheetTitle></SheetTitle>

                    <div className="m-4 flex flex-col space-y-6">
                      <div className="ml-3">
                        <a
                          href="/"
                          className="text-foreground flex items-center justify-start gap-2 text-2xl font-bold"
                          onClick={() => setIsOpen(false)}
                        >
                          <img
                            src="/logo.png"
                            className="max-h-6"
                            alt="Hack4Freedom"
                          />
                        </a>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-foreground hover:bg-muted rounded-lg px-4 py-2 text-lg font-medium transition-colors"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                      <div className="border-border border-t pt-6">
                        <div className="text-muted-foreground text-center text-sm">
                          <div className="font-medium">Powered by</div>
                          <img
                            src="/evento-logo.svg"
                            alt="Evento"
                            className="max-w-[130px] mx-auto mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export { Navbar };
