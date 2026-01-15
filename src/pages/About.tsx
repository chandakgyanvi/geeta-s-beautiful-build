import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Users, Target, Heart, Clock } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go the extra mile to ensure you find exactly what you need.",
  },
  {
    icon: Target,
    title: "Quality Focus",
    description: "We never compromise on quality. Every product we sell meets our high standards.",
  },
  {
    icon: Heart,
    title: "Honest Dealings",
    description: "Transparency and integrity are at the core of our business. Fair prices, genuine products.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    description: "Timely delivery and consistent service you can count on for all your projects.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                About Geeta Plywood & Hardware
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Your trusted partner in building and interior solutions
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 md:grid-cols-2 md:items-center">
                <div>
                  <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Located at Gajner Road, Geeta Plywood & Hardware has been serving the community 
                      with dedication and commitment to quality. What started as a small shop has 
                      grown into a trusted name for all building and interior needs.
                    </p>
                    <p>
                      We understand that building or renovating a space is a significant investment. 
                      That's why we offer only the best products — from premium plywood and beautiful 
                      laminates to sturdy doors and reliable hardware fittings.
                    </p>
                    <p>
                      Our team is always ready to help you choose the right materials for your project, 
                      whether it's a small home improvement or a large construction project.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary mx-auto mb-4">
                        <span className="text-3xl font-bold text-primary-foreground">GP</span>
                      </div>
                      <h3 className="font-heading text-xl font-bold text-foreground">
                        Geeta Plywood
                      </h3>
                      <p className="text-muted-foreground">& Hardware</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-20 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
                Our Values
              </h2>
              <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl bg-card p-6 text-center shadow-sm"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
                Visit Us
              </h2>
              <div className="rounded-xl bg-card border border-border p-8 shadow-sm">
                <p className="text-lg text-foreground font-medium mb-2">
                  Geeta Plywood & Hardware
                </p>
                <p className="text-muted-foreground mb-4">
                  Opposite Dr. Preeti Kalla, Gajner Road
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
                  <a href="tel:9828158896" className="text-primary hover:underline">
                    📞 9828158896
                  </a>
                  <a href="tel:9649907961" className="text-primary hover:underline">
                    📞 9649907961
                  </a>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Open: Monday - Saturday, 9:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default About;
