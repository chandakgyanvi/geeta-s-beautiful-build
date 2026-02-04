import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">GP</span>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">Geeta Plywood</h3>
                <p className="text-xs text-primary-foreground/70">& Hardware</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for premium plywood, laminates, doors, and hardware solutions. Building dreams since years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Products
              </Link>
              <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
              <Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Our Products</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Plywood
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Laminates
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Doors
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Louvers
              </Link>
              <Link to="/products" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Hardware Fittings
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:9828158896" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                9828158896
              </a>
              <a href="tel:9649907961" className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                9649907961
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Opposite Dr. Preeti Kalla, Gajner Road</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4" />
                <span>Mon - Sat: 9:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {currentYear} Geeta Plywood & Hardware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
