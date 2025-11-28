import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Journey } from "@/components/journey";
import { Cities } from "@/components/cities";
import { Prizes } from "@/components/prizes";
import { GetInvolved } from "@/components/get-involved";
import { Mentors } from "@/components/mentors";
import { Winners } from "@/components/winners";
import { Work2025 } from "@/components/work-2025";
import { WhyEvento } from "@/components/why-evento";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { BlogCards } from "@/components/blog-cards";
import { getPostsByTag } from "@/lib/ghost";

export default async function Home() {
  const ghostPosts = await getPostsByTag("hack4freedom-com");

  const blogItems = ghostPosts.length > 0
    ? ghostPosts.map((post) => ({
        id: post.id,
        title: post.title,
        summary: post.excerpt || "",
        url: `https://evento.so/blog/${post.slug}`,
        image: post.feature_image || "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg",
      }))
    : undefined;
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <Cities />
      <About />
      <Journey />
      <Prizes />
      <GetInvolved />
      <Work2025 />
      {blogItems && blogItems.length > 0 && <BlogCards items={blogItems} />}
      <Mentors />
      <Winners />
      <WhyEvento />
      <FAQ />
      <Footer />
    </main>
  );
}
