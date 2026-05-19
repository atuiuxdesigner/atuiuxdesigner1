import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowUpRight, Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const links = [
  { label: "Email",    value: "atuiuxdesigner@gmail.com", href: "mailto:atuiuxdesigner@gmail.com" },
  { label: "WhatsApp", value: "+91 96238 80889",          href: "https://wa.me/919623880889", external: true },
  { label: "Telegram", value: "@Atul9623",                href: "https://t.me/Atul9623", external: true },
  { label: "Location", value: "Pune, India",              href: null as string | null },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke("save-contact", { body: formData });
      if (error || (data as any)?.error) {
        throw new Error((data as any)?.error || error?.message || "Failed to send");
      }
      toast({ title: "Message sent!", description: "Thank you. I'll get back to you soon." });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      toast({ title: "Couldn't send message", description: (err as Error).message, variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
          ↓ Get in touch
        </p>

        <h2
          className="font-serif-display text-foreground leading-[0.92] mb-10"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          Let's make
          <br />
          <em className="italic text-primary">something</em>.
        </h2>

        <a
          href="mailto:atuiuxdesigner@gmail.com"
          className="inline-flex items-center gap-3 font-serif-display text-2xl md:text-4xl text-foreground border-b-2 border-foreground hover:text-primary hover:border-primary transition-colors pb-1 mb-16 break-all"
        >
          atuiuxdesigner@gmail.com
          <ArrowUpRight className="w-7 h-7 shrink-0" />
        </a>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-foreground bg-background mb-16">
          {links.map((item, idx) => {
            const inner = (
              <div className="p-6 h-full">
                <p className="text-xs uppercase tracking-widest font-semibold text-foreground/60 mb-2">
                  {item.label}
                </p>
                <p className="font-medium text-foreground break-all">{item.value}</p>
              </div>
            );
            const borderClasses = [
              idx > 0 ? "lg:border-l-2 border-foreground" : "",
              idx === 1 ? "sm:border-l-2 border-foreground" : "",
              idx === 3 ? "sm:border-l-2 border-foreground" : "",
              idx >= 2 ? "border-t-2 lg:border-t-0 border-foreground" : "",
            ].join(" ");
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className={`${borderClasses} hover:bg-accent transition-colors block`}
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className={borderClasses}>{inner}</div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6 border-2 border-foreground bg-background p-6 md:p-10 shadow-brutal-lg">
          <h3 className="font-serif-display text-3xl text-foreground mb-2">Send a note</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <Input
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              required
              className="border-2 border-foreground rounded-sm h-12 text-base focus-visible:ring-0 focus-visible:border-primary"
            />
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              required
              className="border-2 border-foreground rounded-sm h-12 text-base focus-visible:ring-0 focus-visible:border-primary"
            />
          </div>
          <Input
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="What's on your mind?"
            required
            className="border-2 border-foreground rounded-sm h-12 text-base focus-visible:ring-0 focus-visible:border-primary"
          />
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell me about your project…"
            rows={5}
            required
            className="border-2 border-foreground rounded-sm text-base focus-visible:ring-0 focus-visible:border-primary resize-none"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto bg-foreground text-background hover:bg-primary rounded-sm border-2 border-foreground shadow-brutal hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all font-semibold h-14 px-8 text-base"
          >
            {isSubmitting ? "Sending…" : <>Send message <Send className="ml-2 w-4 h-4" /></>}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
