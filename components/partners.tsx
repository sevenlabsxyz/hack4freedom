import { Badge } from "@/components/ui/badge";
import Link from "next/link";

function Partners() {
  return (
    <section id="partners" className="py-16 md:py-24 bg-background text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Badge variant="outline" className="mb-4 bg-pink-700">
          Global Partners
        </Badge>
        <div className="flex justify-center mt-8">
          <Link
            href="https://vinteum.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/partners/vinteum.png"
              alt="Vinteum"
              className="h-12 md:h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { Partners };
