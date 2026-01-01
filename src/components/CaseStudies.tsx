import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "YouBank Delivery App",
    description:
      "A comprehensive delivery management system designed to streamline logistics and enhance customer experience with real-time tracking.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    image: "delivery",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "YouBank Customer App",
    description:
      "Mobile banking application focused on simplicity and security, making financial management accessible to everyone.",
    tags: ["Mobile Design", "User Testing", "Design System"],
    image: "customer",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    title: "YouBank Mentor App",
    description:
      "An innovative mentorship platform connecting aspiring professionals with industry experts through personalized learning paths.",
    tags: ["Product Design", "Wireframing", "Usability"],
    image: "mentor",
    color: "from-orange-500/20 to-red-500/20",
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
          {projects.map((project, index) => (
            <article
              key={index}
              className="group bg-card border border-border rounded-2xl overflow-hidden card-hover"
            >
              {/* Project Image */}
              <div className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-foreground/20">
                    {project.image.charAt(0).toUpperCase()}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-6 h-6 text-primary-foreground" />
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
          ))}
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
