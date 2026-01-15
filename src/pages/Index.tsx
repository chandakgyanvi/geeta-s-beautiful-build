import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import Hero from "@/components/Hero";
import ProductsPreview from "@/components/ProductsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductsPreview />
        <WhyChooseUs />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
