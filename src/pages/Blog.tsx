import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Right Plywood for Your Project",
    excerpt: "Learn about different grades of plywood and which one suits your furniture or construction needs best.",
    date: "January 15, 2026",
    author: "Geeta Plywood Team",
  },
  {
    title: "Laminate vs Veneer: Which One Should You Pick?",
    excerpt: "A comprehensive comparison of laminates and veneers to help you make the right choice for your interiors.",
    date: "January 10, 2026",
    author: "Geeta Plywood Team",
  },
  {
    title: "5 Tips for Maintaining Your Wooden Furniture",
    excerpt: "Simple maintenance tips to keep your wooden furniture looking new and lasting longer.",
    date: "January 5, 2026",
    author: "Geeta Plywood Team",
  },
  {
    title: "Latest Trends in Door Handle Designs",
    excerpt: "Explore the newest styles and finishes in door handles that can transform your home's look.",
    date: "December 28, 2025",
    author: "Geeta Plywood Team",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary/5 py-16 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Blog
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tips, guides, and insights about plywood, laminates, hardware, and home improvement.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Blog;
