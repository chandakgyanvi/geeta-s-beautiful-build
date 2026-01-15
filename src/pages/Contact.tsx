import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Phone, MessageCircle, MapPin, Clock, Mail, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, show a success message. Email functionality will be added with Supabase.
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary/50 py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-foreground md:text-5xl">
                Contact Us
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Get in touch for inquiries, orders, or any assistance
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about our products? Need help choosing the right materials? 
                  We're here to help! Reach out to us through any of the following ways.
                </p>

                <div className="space-y-6">
                  {/* Phone Numbers */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <div className="mt-1 space-y-1">
                        <a href="tel:9828158896" className="block text-muted-foreground hover:text-primary transition-colors">
                          9828158896
                        </a>
                        <a href="tel:9649907961" className="block text-muted-foreground hover:text-primary transition-colors">
                          9649907961
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10 shrink-0">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">WhatsApp</h3>
                      <a
                        href="https://wa.me/919828158896"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-muted-foreground hover:text-green-600 transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="mt-1 text-muted-foreground">
                        Opposite Dr. Preeti Kalla, Gajner Road
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="mt-1 text-muted-foreground">
                        Monday - Saturday: 9:00 AM - 8:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a href="tel:9828158896" className="flex-1">
                    <Button className="w-full gap-2">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/919828158896"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full gap-2 border-green-500 text-green-600 hover:bg-green-50">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="rounded-xl bg-card border border-border p-6 md:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-heading text-xl font-bold text-foreground">
                        Send us a Message
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email (Optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your requirements..."
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full gap-2" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
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

export default Contact;
