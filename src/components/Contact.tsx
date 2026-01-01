import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Globe, Send, Linkedin, Dribbble, ExternalLink } from "lucide-react";

const contactMethods = [
  { icon: Mail, label: "Email", value: "hello@atulthorat.com" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "Mumbai, India" },
  { icon: Globe, label: "Website", value: "atulthorat.com" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Something{" "}
            <span className="text-primary glow-text">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your vision to
            life.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <method.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="text-sm text-muted-foreground mb-1">
                {method.label}
              </div>
              <div className="text-foreground font-medium text-sm">
                {method.value}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm text-foreground font-medium"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="bg-secondary border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm text-foreground font-medium"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="bg-secondary border-border focus:border-primary focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm text-foreground font-medium"
              >
                Subject
              </label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Project inquiry"
                className="bg-secondary border-border focus:border-primary focus:ring-primary"
                required
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm text-foreground font-medium"
              >
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                rows={6}
                className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan-sm transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
