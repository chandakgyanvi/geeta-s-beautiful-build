import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-pattern py-20 md:py-28 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="mr-2">🏗️</span>
            Your Trusted Building Partner
          </div>

          {/* Main Headline */}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Everything You Need to{" "}
            <span className="text-primary">Build & Beautify</span>{" "}
            Your Space
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Premium plywood, laminates, doors, louvers, and hardware fittings — 
            all under one roof at Geeta Plywood & Hardware.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/products">
              <Button size="lg" className="gap-2 text-base px-6">
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="tel:9828158896">
              <Button variant="outline" size="lg" className="gap-2 text-base px-6">
                <Phone className="h-4 w-4" />
                Call: 9828158896
              </Button>
            </a>
          </div>

          {/* Quick Contact */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <span>9828158896 / 9649907961</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-border" />
            <a
              href="https://wa.me/919828158896"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
