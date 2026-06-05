import { useState } from "react";
import { Calendar, ArrowRight, Clock, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const posts = [
  { slug: "packaging-trends-2024", title: "Top Packaging Trends for 2024", excerpt: "Discover the latest packaging design trends shaping the industry this year, from sustainable materials to bold typography.", category: "Inspiration", date: "Jan 15, 2024", readTime: "5 min", tags: ["Trends", "Design"], img: "/images/categories/mailer_1.jpg" },
  { slug: "sustainable-packaging-guide", title: "The Complete Guide to Sustainable Packaging", excerpt: "Learn how to choose eco-friendly packaging materials for your brand without compromising on quality or aesthetics.", category: "Knowledge Base", date: "Jan 10, 2024", readTime: "8 min", tags: ["Eco-Friendly", "Guide"], img: "/images/categories/kraft_bakery_1.jpg" },
  { slug: "unboxing-experience", title: "How to Create an Unforgettable Unboxing Experience", excerpt: "Tips and tricks for making your packaging memorable from the first touch to the last.", category: "Inspiration", date: "Jan 5, 2024", readTime: "4 min", tags: ["Branding", "UX"], img: "/images/categories/cosmetic_1.jpg" },
  { slug: "custom-packaging-small-business", title: "Custom Packaging for Small Businesses", excerpt: "Affordable packaging solutions that help small businesses compete with big brands and win customer loyalty.", category: "Knowledge Base", date: "Dec 28, 2023", readTime: "6 min", tags: ["Small Business", "Tips"], img: "/images/categories/candle_1.jpg" },
  { slug: "food-packaging-regulations", title: "FDA Food Packaging Regulations You Need to Know", excerpt: "Stay compliant with the latest food-safe packaging requirements and avoid costly mistakes.", category: "Knowledge Base", date: "Dec 20, 2023", readTime: "7 min", tags: ["FDA", "Compliance"], img: "/images/categories/food_1.jpg" },
  { slug: "holiday-packaging-ideas", title: "Creative Holiday Packaging Ideas", excerpt: "Festive packaging designs that boost sales during the holiday season and create lasting impressions.", category: "Inspiration", date: "Dec 15, 2023", readTime: "5 min", tags: ["Holiday", "Creative"], img: "/images/categories/chocolate_1.jpg" },
];

const sidebarCategories = ["All Posts", "Knowledge Base", "Inspiration"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts = activeCategory === "All Posts"
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const [featuredPost, ...restPosts] = filteredPosts;

  const popularPosts = posts.slice(0, 3);

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary/90 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Blog</h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Expert insights, packaging tips, and industry trends to help your brand stand out.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          {featuredPost && (
            <article className="group mb-12 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto overflow-hidden">
                  <img src={featuredPost.img} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{featuredPost.category}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {featuredPost.date}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" /> {featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-4">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">{tag}</span>
                    ))}
                  </div>
                  <span className="text-primary font-semibold inline-flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                    Read Full Article <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          )}

          <div className="grid lg:grid-cols-[1fr_300px] gap-10">
            {/* Posts grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {restPosts.map((post) => (
                <article key={post.slug} className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                  <div className="h-48 overflow-hidden">
                    <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{post.category}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {post.date}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-md">{tag}</span>
                      ))}
                    </div>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1 cursor-pointer hover:gap-2 transition-all">
                      Read More <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Category filter */}
              <div className="bg-card border border-border rounded-2xl p-5 sticky top-24">
                <h3 className="font-bold text-foreground mb-4">Categories</h3>
                <div className="space-y-1">
                  {sidebarCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                        activeCategory === cat
                          ? "bg-primary text-primary-foreground font-medium"
                          : "hover:bg-muted text-foreground"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular posts */}
              <div className="bg-card border border-border rounded-2xl p-5">
                <h3 className="font-bold text-foreground mb-4">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post) => (
                    <div key={post.slug} className="flex gap-3 group cursor-pointer">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">{post.title}</h4>
                        <span className="text-xs text-muted-foreground">{post.readTime} read</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-primary/10 to-cta/10 border border-primary/20 rounded-2xl p-5">
                <Mail className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold text-foreground mb-2">Stay Updated</h3>
                <p className="text-sm text-muted-foreground mb-4">Get packaging tips and trends delivered to your inbox.</p>
                <div className="space-y-2">
                  <Input placeholder="Your email address" type="email" className="bg-background" />
                  <Button className="w-full bg-cta hover:bg-cta/90 text-secondary font-semibold">Subscribe</Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
