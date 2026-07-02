import { createFileRoute } from "@tanstack/react-router";
import Cataloge from "#/components/landing/cataloge";
import CoreValues from "#/components/landing/coreValues";
import Cta from "#/components/landing/cta";
import Advisors from "#/components/landing/advisors";
import Footer from "#/components/landing/footer";
import Header from "#/components/landing/header";
import Hero from "#/components/landing/hero";
import CategoriesChips from "#/components/landing/categoriesChips";
import WhyUss from "#/components/landing/whiUs";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 flex flex-col font-sans">
      <Header />
      <Hero />
      <CategoriesChips />
      <WhyUss />
      <Cataloge />
      <CoreValues />
      <Cta />
      <Advisors />
      <Footer />
    </div>
  );
}
