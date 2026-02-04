import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import thumbnailDelivery from "@/assets/thumbnail-dp1.png";
import thumbnailCustomer from "@/assets/thumbnail-YC_1.png";
import thumbnailVendor from "@/assets/thumbnail-YP_1.png";
import iconDelivery from "@/assets/YH_Delivery_App.svg";
import iconCustomer from "@/assets/YH_Customer_App.svg";
import iconVendor from "@/assets/YH_Vendor_App.svg";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  thumbnail?: string;
  hoverIcon?: string;
  internalLink?: string;
  link?: string;
}

const projects: Project[] = [
  {
    title: "Youhonk Delivery App",
    description:
      "Designed the complete user experience for workshop staff to efficiently manage vehicle pickup & drop operations. Crafted end-to-end user flows and low-fidelity wireframes for seamless handoff to visual designers.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "delivery",
    color: "from-blue-500/20 to-purple-500/20",
    thumbnail: thumbnailDelivery,
    hoverIcon: iconDelivery,
    internalLink: "/case-study/delivery",
  },
  {
    title: "Youhonk Customer App",
    description:
      "Contributed to designing the customer-facing app for booking vehicle repair services, transforming the traditional repair journey into a seamless digital experience.",
    tags: ["Mobile Design", "User Testing", "Design System"],
    image: "customer",
    color: "from-green-500/20 to-teal-500/20",
    thumbnail: thumbnailCustomer,
    hoverIcon: iconCustomer,
    internalLink: "/case-study/customer",
  },
  {
    title: "Youhonk Vendor App",
    description:
      "Helped design the vendor portal enabling service providers to manage bookings, customer requests, and workshop operations efficiently.",
    tags: ["Product Design", "Wireframing", "Usability"],
    image: "mentor",
    color: "from-orange-500/20 to-red-500/20",
    thumbnail: thumbnailVendor,
    hoverIcon: iconVendor,
    internalLink: "/case-study/vendor",
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Case <span className="text-primary glow-text">Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my recent projects where I've transformed complex challenges
            into elegant, user-centered solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const hasLink = 'internalLink' in project || 'link' in project;
            
            const cardContent = (
              <article
                className="group bg-card border border-border rounded-2xl overflow-hidden card-hover h-full"
              >
                {/* Project Image */}
                <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {project.thumbnail ? (
                      <img 
                        src={project.thumbnail} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-4xl font-bold text-foreground/20">
                        {project.image.charAt(0).toUpperCase()}
                      </span>
                    )}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 overflow-hidden">
                      {project.hoverIcon ? (
                        <img src={project.hoverIcon} alt="" className="w-full h-full object-contain" />
                      ) : (
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                          <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Case Study Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-xs font-medium text-primary rounded-full border border-primary/30">
                      CASE STUDY
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );

            if ('internalLink' in project && project.internalLink) {
              return (
                <Link key={index} to={project.internalLink} className="block cursor-pointer">
                  {cardContent}
                </Link>
              );
            }
            
            if ('link' in project && project.link) {
              return (
                <a key={index} href={project.link} className="block cursor-pointer">
                  {cardContent}
                </a>
              );
            }

            return <div key={index}>{cardContent}</div>;
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300"
          >
            See all case studies
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
