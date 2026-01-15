import { Shield, Award, Package, IndianRupee } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "We source only the finest materials from trusted manufacturers, ensuring durability and reliability.",
  },
  {
    icon: Award,
    title: "Local Trust",
    description: "Serving the community for years with honest dealings and customer-first approach.",
  },
  {
    icon: Package,
    title: "Wide Range",
    description: "From plywood to hardware, we offer everything you need under one roof.",
  },
  {
    icon: IndianRupee,
    title: "Best Prices",
    description: "Competitive pricing without compromising on quality. Value for every rupee spent.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best products and service for your building and interior needs.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group rounded-xl bg-card p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
