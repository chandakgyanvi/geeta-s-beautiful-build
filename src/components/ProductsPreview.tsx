import { Link } from "react-router-dom";
import { ArrowRight, Layers, Palette, DoorOpen, AlignHorizontalDistributeCenter, Wrench, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Plywood",
    description: "High-quality plywood for furniture, interiors, and construction. Available in various grades and thicknesses.",
    icon: Layers,
  },
  {
    title: "Laminates",
    description: "Beautiful decorative laminates in hundreds of designs, colors, and textures for stunning surfaces.",
    icon: Palette,
  },
  {
    title: "Doors",
    description: "Elegant wooden and flush doors for residential and commercial spaces. Durable and stylish.",
    icon: DoorOpen,
  },
  {
    title: "Louvers",
    description: "Modern louver panels for ventilation and aesthetics. Perfect for ceilings and partitions.",
    icon: AlignHorizontalDistributeCenter,
  },
  {
    title: "Hardware Fittings",
    description: "Complete range of hardware including hinges, handles, locks, and accessories for your projects.",
    icon: Wrench,
  },
  {
    title: "More Products",
    description: "Explore our complete range of building and interior materials. Visit us to see our full collection.",
    icon: Grid3X3,
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Our Product Categories
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Everything you need for building and beautifying your home or commercial space.
            </p>
          </div>
          <Link to="/products">
            <Button variant="outline" className="gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              icon={product.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
