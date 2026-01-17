import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ProductCard from "@/components/ProductCard";
import { Layers, Palette, DoorOpen, AlignHorizontalDistributeCenter, Wrench, Hammer, PanelTop, Square, Droplets, Sparkles } from "lucide-react";

import plywoodImg from "@/assets/products/plywood.jpg";
import laminatesImg from "@/assets/products/laminates.jpg";
import doorHandlesImg from "@/assets/products/door-handles.jpg";
import louversImg from "@/assets/products/louvers.jpg";
import hardwareImg from "@/assets/products/hardware.jpg";
import toolsImg from "@/assets/products/tools.jpg";
import veneersImg from "@/assets/products/veneers.jpg";
import mdfImg from "@/assets/products/mdf.jpg";
import adhesivesImg from "@/assets/products/adhesives.jpg";
import decorativeImg from "@/assets/products/decorative.jpg";

const products = [
  {
    title: "Plywood",
    description: "Premium quality plywood in various grades including BWR, BWP, MR grade, and commercial plywood. Available in multiple thicknesses from 4mm to 25mm for all your furniture and construction needs.",
    icon: Layers,
    imageUrl: plywoodImg,
  },
  {
    title: "Laminates",
    description: "Extensive collection of decorative laminates featuring hundreds of designs, textures, and finishes. From wood grains to solid colors, matte to glossy — transform any surface beautifully.",
    icon: Palette,
    imageUrl: laminatesImg,
  },
  {
    title: "Door Handles",
    description: "Premium door handles and knobs in chrome, brass, and gold finishes. Wide selection of modern and classic styles to complement any interior.",
    icon: DoorOpen,
    imageUrl: doorHandlesImg,
  },
  {
    title: "Louvers",
    description: "Modern louver panels for elegant ceiling designs, wall cladding, and partitions. Enhance ventilation while adding a contemporary touch to your spaces.",
    icon: AlignHorizontalDistributeCenter,
    imageUrl: louversImg,
  },
  {
    title: "Hardware Fittings",
    description: "Complete range of hardware including door handles, hinges, locks, drawer channels, kitchen fittings, and cabinet accessories from trusted brands.",
    icon: Wrench,
    imageUrl: hardwareImg,
  },
  {
    title: "Tools & Accessories",
    description: "Essential tools and accessories for woodworking and installation. Screws, nails, adhesives, and more for your DIY and professional projects.",
    icon: Hammer,
    imageUrl: toolsImg,
  },
  {
    title: "Veneers & Panels",
    description: "Natural wood veneers and decorative panels for premium furniture finishing. Create stunning wood textures on any surface.",
    icon: PanelTop,
    imageUrl: veneersImg,
  },
  {
    title: "Block Boards & MDF",
    description: "High-quality block boards and MDF sheets for furniture making. Ideal for wardrobes, cabinets, and modular furniture construction.",
    icon: Square,
    imageUrl: mdfImg,
  },
  {
    title: "Adhesives",
    description: "Premium wood adhesives, Fevicol, construction glues, and bonding solutions. Strong and reliable adhesives for all woodworking projects.",
    icon: Droplets,
    imageUrl: adhesivesImg,
  },
  {
    title: "Decorative Items",
    description: "Beautiful decorative pieces for home interiors. Photo frames, wall art, mirrors, and ornamental items to enhance your living spaces.",
    icon: Sparkles,
    imageUrl: decorativeImg,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                Our Products
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Quality building and interior materials for every project
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <ProductCard
                  key={product.title}
                  title={product.title}
                  description={product.description}
                  icon={product.icon}
                  imageUrl={product.imageUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-2xl font-bold text-foreground md:text-3xl mb-4">
                Looking for something specific?
              </h2>
              <p className="text-muted-foreground mb-6">
                We stock a wide variety of products. Contact us to check availability 
                or to place a special order.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="tel:9828158896"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  📞 Call: 9828158896
                </a>
                <a
                  href="https://wa.me/919828158896"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-medium text-white hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
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

export default Products;
