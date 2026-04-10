import Hero from "@/components/sections/Hero";
import Testimonial from "@/components/sections/Testimonials";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Clients from "@/components/sections/Clients";
import Blog from "@/components/sections/Blogs";
import CTA from "@/components/sections/Cta";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Testimonial />
      <Products />
      <Clients />
      <Blog />
      <CTA />
    </main>
  );
}