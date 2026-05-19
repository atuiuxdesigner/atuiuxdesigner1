import { ArrowUpRight } from "lucide-react";
import thumbnailDelivery from "@/assets/thumbnail-dp1.png";
import thumbnailCustomer from "@/assets/thumbnail-YC_1.png";
import thumbnailVendor from "@/assets/thumbnail-YP_1.png";
import { Link } from "react-router-dom";

interface Project {
  index: string;
  title: string;
  description: string;
  tags: string[];
  thumbnail: string;
  status: "Live" | "Coming Soon";
  internalLink?: string;
}

const projects: Project[] = [
  {
    index: "01",
    title: "Youhonk Delivery App",
    description: "Real-time pickup & drop-off flows that cut workshop dispatch time in half.",
    tags: ["Mobile", "Logistics", "0→1"],
    thumbnail: thumbnailDelivery,
    status: "Live",
    internalLink: "/case-study/delivery",
  },
  {
    index: "02",
    title: "Youhonk Customer App",
    description: "Book a vehicle repair in three taps — designed for first-time, low-trust users.",
    tags: ["Mobile", "B2C", "Onboarding"],
    thumbnail: thumbnailCustomer,
    status: "Coming Soon",
    internalLink: "/case-study/customer",
  },
  {
    index: "03",
    title: "Youhonk Vendor App",
    description: "Workshop ops without the spreadsheet chaos — orders, payments, and inventory in one.",
    tags: ["SaaS", "B2B", "Operations"],
    thumbnail: thumbnailVendor,
    status: "Coming Soon",
    internalLink: "/case-study/vendor",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-20 md:py-28 border-b-2 border-foreground">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
              ↓ Selected Work
            </p>
            <h2 className="font-serif-display text-5xl md:text-7xl text-foreground leading-[0.95]">
              Case studies
            </h2>
          </div>
          <p className="text-foreground/70 max-w-md text-base md:text-lg">
            Three apps. One vehicle-service platform. Built end-to-end from research to ship.
          </p>
        </div>

        {/* Alternating large cards */}
        <div className="space-y-12 md:space-y-20">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const cardInner = (
              <article
                className={`group grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                  isReversed ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Thumbnail */}
                <div className="md:col-span-7 border-2 border-foreground bg-secondary shadow-brutal-lg overflow-hidden aspect-[16/10] group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-transform duration-300">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-5 space-y-5">
                  <div className="flex items-center gap-4">
                    <span className="font-serif-display text-4xl text-primary italic">
                      {project.index}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase tracking-widest px-3 py-1 border-2 border-foreground ${
                        project.status === "Live"
                          ? "bg-accent text-foreground"
                          : "bg-background text-foreground/70"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-serif-display text-3xl md:text-5xl leading-[1] text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/75 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 border border-foreground/40 text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 inline-flex items-center gap-2 font-semibold text-foreground border-b-2 border-foreground pb-1 group-hover:text-primary group-hover:border-primary transition-colors">
                    View case study
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </article>
            );

            return project.internalLink ? (
              <Link
                key={project.index}
                to={project.internalLink}
                className="block"
                data-cursor="Explore"
              >
                {cardInner}
              </Link>
            ) : (
              <div key={project.index} data-cursor="Coming Soon">
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
