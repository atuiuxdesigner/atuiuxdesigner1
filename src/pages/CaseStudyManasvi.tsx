import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Check, Info } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.svg";
import mfsLogo from "@/assets/manasvi/logo.svg";
import deskHero from "@/assets/manasvi/desk-hero.jpg";
import deskServices from "@/assets/manasvi/desk-services.jpg";
import deskQuote from "@/assets/manasvi/desk-quote.jpg";
import mobHero from "@/assets/manasvi/mob-hero.jpg";
import mobServices from "@/assets/manasvi/mob-services.jpg";
import mobQuote from "@/assets/manasvi/mob-quote.jpg";
import office from "@/assets/manasvi/office.jpg";
import clinic from "@/assets/manasvi/clinic.jpg";
import society from "@/assets/manasvi/society.jpg";
import home from "@/assets/manasvi/home.jpg";
import team from "@/assets/manasvi/team.jpg";
import detail from "@/assets/manasvi/detail.jpg";
import lobby from "@/assets/manasvi/lobby.jpg";
import equipment from "@/assets/manasvi/equipment.jpg";
import about from "@/assets/manasvi/about.jpg";

const SITE = "https://www.manasvifacilityservices.com";
const URL = "https://atuiuxdesigner.lovable.app/case-study/manasvi-facility-services";

const Label = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
    {n} — {children}
  </p>
);

const Section = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section id={id} className={`py-16 md:py-24 border-b-2 border-foreground ${className}`}>
    <div className="container mx-auto px-6">{children}</div>
  </section>
);

const Frame = ({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) => (
  <figure className={className}>
    <div className="border-2 border-foreground shadow-brutal bg-secondary overflow-hidden">
      <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-auto block" />
    </div>
    {caption && <figcaption className="mt-3 text-sm text-muted-foreground">{caption}</figcaption>}
  </figure>
);

// Brand values sampled from the live site's logo SVG and stylesheet (Figma not accessible).
const palette = [
  { name: "Manasvi Blue", hex: "#006BD2", note: "Primary actions, logo wordmark", fg: "#ffffff" },
  { name: "Leaf Green", hex: "#189650", note: "Logo mark, WhatsApp action", fg: "#ffffff" },
  { name: "Sky", hex: "#04A4F2", note: "Logo highlight", fg: "#0a0a0a" },
  { name: "Deep Navy", hex: "#0B1B33", note: "Utility bar, headings (≈ oklch 20% .055 251)", fg: "#ffffff" },
  { name: "Soft Blue", hex: "#E6F1FD", note: "Section & hero tint (≈ oklch 95% .045 244)", fg: "#0a0a0a" },
];

const services = ["Office Cleaning", "Clinic Cleaning", "Society Cleaning", "Deep Cleaning", "Flat / Home Cleaning", "Manpower Supply"];

const ia = [
  { t: "Hero", d: "Promise, service area, three contact actions" },
  { t: "Services", d: "Six service cards, one per space type" },
  { t: "Trust strip", d: "Rates · Quality · On time · Experienced staff" },
  { t: "About", d: "Proprietor, people / process / locality" },
  { t: "Service in action", d: "Four photo stories by space type" },
  { t: "How it works", d: "Four-step path from call to ready space" },
  { t: "Coverage", d: "Pune + PMC areas, Google Business Profile link" },
  { t: "Gallery", d: "Team, detail, lobby, equipment, inauguration" },
  { t: "Quote form", d: "Service, property type, locality, frequency" },
  { t: "Closing CTA", d: "WhatsApp + Call, sticky mobile action bar" },
];

const Row = ({ items }: { items: string[] }) => (
  <ul className="space-y-3">
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-foreground/80">
        <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
        <span>{i}</span>
      </li>
    ))}
  </ul>
);

const CaseStudyManasvi = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Helmet>
      <title>Manasvi Facility Services — Brand & Website Case Study | Atul Thorat</title>
      <meta name="description" content="Freelance case study: brand presentation and website UX/UI for Manasvi Facility Services, a Pune cleaning and facility-support business." />
      <link rel="canonical" href={URL} />
      <meta property="og:title" content="Building a Digital Presence for a Local Service Business" />
      <meta property="og:description" content="Brand and website UX/UI for Manasvi Facility Services, Pune." />
      <meta property="og:url" content={URL} />
    </Helmet>

    <header className="fixed top-0 inset-x-0 z-50 bg-background border-b-2 border-foreground">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="Atul Thorat — home"><img src={logo} alt="Atul Thorat" className="h-10 w-auto" /></Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">
            <ArrowLeft className="w-4 h-4" aria-hidden /> Back
          </Link>
        </div>
      </div>
    </header>

    <main className="pt-16">
      {/* Hero */}
      <Section className="pt-20 md:pt-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-5">Freelance · Case study 05</p>
        <h1 className="font-serif-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
          Building a digital presence for a <span className="italic text-primary">local service</span> business
        </h1>
        <dl className="mt-12 grid grid-cols-2 md:grid-cols-4 border-2 border-foreground">
          {[
            ["Client", "Manasvi Facility Services, Pune"],
            ["Role", "Freelance UI/UX Designer"],
            ["Scope", "Brand presentation · Website UX/UI · Local presence"],
            ["Status", "Website live"],
          ].map(([k, v], i) => (
            <div key={k} className={`p-5 ${i % 2 ? "border-l-2" : ""} ${i > 1 ? "border-t-2 md:border-t-0" : ""} md:border-l-2 md:first:border-l-0 border-foreground`}>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{k}</dt>
              <dd className="font-semibold">{v}</dd>
            </div>
          ))}
        </dl>
        <Frame className="mt-12" src={deskHero} alt="Manasvi Facility Services website homepage hero on desktop, showing the headline 'Clean spaces. Reliable people. Better workplaces.' beside a team photo" caption="Live homepage, desktop — captured from manasvifacilityservices.com" />
      </Section>

      {/* Overview */}
      <Section>
        <Label n="01">Overview</Label>
        <div className="grid md:grid-cols-12 gap-10">
          <h2 className="md:col-span-5 font-serif-display text-4xl md:text-5xl leading-[1]">A small team, a clear offer, and a site that makes it easy to ask for help.</h2>
          <div className="md:col-span-7 space-y-5 text-lg text-foreground/80 leading-relaxed">
            <p>Manasvi Facility Services is a Pune-based housekeeping, cleaning and manpower business led by proprietor Manju Waghmare, serving offices, clinics, housing societies and homes across Pune and Pimpri-Chinchwad from Viman Nagar.</p>
            <p>This was my first freelance project. The work centred on presenting the brand consistently online and designing a single-page website that explains the services, builds trust and routes visitors to a call, WhatsApp message or quote request.</p>
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div><h3 className="font-sans font-semibold text-base mb-3">Responsibilities</h3><Row items={["Website structure and content hierarchy", "UI design and visual system", "Brand application across the site", "Contact and quote journey"]} /></div>
              <div><h3 className="font-sans font-semibold text-base mb-3">Deliverables</h3><Row items={["Live responsive website", "Logo and colour usage on web", "Quote request form", "Link to Google Business Profile"]} /></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Problem */}
      <Section className="bg-secondary">
        <Label n="02">Starting point</Label>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <h2 className="font-serif-display text-4xl md:text-5xl leading-[1]">Service businesses are chosen on trust — usually in a few seconds on a phone.</h2>
          <div className="space-y-5 text-lg text-foreground/80">
            <p>Before this project the business had a limited digital footprint. People looking for cleaning support needed a quick way to understand what Manasvi does, where it works, and how to reach a real person.</p>
            <div className="brutal-card p-5 flex gap-3 text-base">
              <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
              <p>Pre-project screenshots, search data or a written brief were not available for this case study, so the starting point is described qualitatively.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Goals */}
      <Section>
        <Label n="03">Brief, goals & constraints</Label>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Confirmed in the live product", i: ["Present six services clearly", "Serve Pune + PMC, from Viman Nagar", "Contact by phone, WhatsApp or form", "Hours: Mon–Sat, 09:00–18:00"] },
            { t: "Design objectives", i: ["Look credible and local, not corporate", "Let visitors self-identify by space type", "Keep every screen one tap from contact", "Reassure with people, process and place"] },
            { t: "Constraints", i: ["Small business, small content budget", "Mostly mobile visitors (assumed)", "No pricing packages to show", "No analytics baseline to design against"] },
          ].map((c) => (
            <div key={c.t} className="brutal-card p-6">
              <h3 className="font-serif-display text-2xl mb-5">{c.t}</h3>
              <Row items={c.i} />
            </div>
          ))}
        </div>
      </Section>

      {/* IA */}
      <Section className="bg-secondary">
        <Label n="04">Strategy & information architecture</Label>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-5">
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1]">One page. One job: start a conversation.</h2>
            <p className="text-foreground/80 text-lg">The page answers the visitor’s questions in order — <em>what do you do, can I trust you, do you cover my area, how do I start?</em> — with contact actions repeated at each decision point.</p>
          </div>
          <ol className="md:col-span-8 grid sm:grid-cols-2 gap-3" aria-label="Homepage section order">
            {ia.map((s, i) => (
              <li key={s.t} className="flex gap-4 border-2 border-foreground bg-background p-4">
                <span className="font-serif-display text-3xl italic text-primary w-10 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div><p className="font-semibold">{s.t}</p><p className="text-sm text-muted-foreground">{s.d}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Brand */}
      <Section>
        <Label n="05">Brand identity</Label>
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <h2 className="md:col-span-6 font-serif-display text-4xl md:text-5xl leading-[1]">Blue for reliability, green for care.</h2>
          <p className="md:col-span-6 text-lg text-foreground/80">The house-and-leaf mark sets the system: a confident blue carries actions and headlines, the leaf green signals cleanliness and is reused for WhatsApp, and a deep navy anchors the utility bar. Manrope, a geometric sans, keeps headlines bold and body copy readable at small sizes.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="border-2 border-foreground shadow-brutal bg-white p-10 flex items-center justify-center min-h-[220px]">
            <img src={mfsLogo} alt="Manasvi Facility Services logo: house and leaf mark with wordmark" className="w-full max-w-[280px] h-auto" />
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-5 border-2 border-foreground shadow-brutal">
            {palette.map((c) => (
              <div key={c.hex} className="min-h-[180px] p-4 flex flex-col justify-end" style={{ background: c.hex, color: c.fg }}>
                <p className="font-semibold text-sm">{c.name}</p>
                <p className="text-xs font-mono opacity-90">{c.hex}</p>
                <p className="text-[11px] mt-1 opacity-80 leading-snug">{c.note}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 border-2 border-foreground p-8 grid md:grid-cols-2 gap-6 items-center">
          <p style={{ fontFamily: "Manrope, system-ui, sans-serif", fontWeight: 800 }} className="text-5xl md:text-6xl leading-none tracking-tight">Aa Manrope</p>
          <p className="text-sm text-muted-foreground">Typeface verified from the live site’s font import (Manrope 400–800). Earlier notes mentioned Fraunces and Inter Tight — these are not used on the live site. Hex values are sampled from the published logo and stylesheet.</p>
        </div>
      </Section>

      {/* Website UX/UI */}
      <Section className="bg-secondary">
        <Label n="06">Website UX/UI</Label>
        <h2 className="font-serif-display text-4xl md:text-5xl leading-[1] max-w-3xl mb-12">Designed for a thumb, a quick scan and a phone call.</h2>
        <div className="grid md:grid-cols-12 gap-8 items-start mb-16">
          <Frame className="md:col-span-8" src={deskServices} alt="Services section with six cards: Office, Clinic, Society, Deep, Flat/Home Cleaning and Manpower Supply" caption="Services discovery — visitors pick by the kind of space they manage." />
          <div className="md:col-span-4 space-y-6">
            {[
              ["Hierarchy", "A three-beat headline ends on the blue promise “Better workplaces.” followed immediately by three actions."],
              ["Services discovery", "Six cards named after spaces, not jargon, each with one plain sentence."],
              ["Trust cues", "Real team photo, proprietor name, locality, hours and the Google rating shown on the profile."],
            ].map(([t, d]) => (
              <div key={t}><h3 className="font-sans font-semibold mb-1">{t}</h3><p className="text-foreground/75">{d}</p></div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            [mobHero, "Mobile hero with headline and contact buttons", "Hero"],
            [mobServices, "Mobile services list", "Services"],
            [mobQuote, "Mobile quote request with call and WhatsApp links", "Contact"],
          ].map(([s, a, c]) => (
            <figure key={c}>
              <div className="border-2 border-foreground shadow-brutal rounded-[1.5rem] overflow-hidden bg-background aspect-[390/844]">
                <img src={s} alt={a} loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <figcaption className="mt-3 text-center text-xs uppercase tracking-widest text-muted-foreground">{c}</figcaption>
            </figure>
          ))}
        </div>
        <Frame className="mt-16" src={deskQuote} alt="Quote request section with call and WhatsApp numbers, business hours, and a form" caption="Conversion path — call, WhatsApp, or a short quote form with service, property type and frequency." />
      </Section>

      {/* Imagery */}
      <Section>
        <Label n="07">Imagery & content</Label>
        <div className="grid md:grid-cols-12 gap-10 mb-10">
          <h2 className="md:col-span-6 font-serif-display text-4xl md:text-5xl leading-[1]">Show the people and the care, not just the result.</h2>
          <p className="md:col-span-6 text-lg text-foreground/80">Copy is written around the visitor’s space — “Built around the way your space actually works.” Imagery follows the same idea: one story per space type, plus team, detail and equipment shots, and the business’s own inauguration photo.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            [office, "Office workspace ready for the day"], [clinic, "Clinic reception being cleaned"],
            [society, "Housing society common area"], [home, "Home cleaning"],
            [team, "Local team"], [detail, "Careful detail work"], [lobby, "Clean shared lobby"], [equipment, "Prepared service team with equipment"],
          ].map(([s, a]) => (
            <img key={a} src={s} alt={a} loading="lazy" className="w-full aspect-square object-cover border-2 border-foreground" />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted-foreground flex gap-2"><Info className="w-4 h-4 mt-0.5 shrink-0" aria-hidden />The image-production workflow (including any AI assistance and the number of selected images) is still to be confirmed before it is described here.</p>
      </Section>

      {/* Local */}
      <Section className="bg-secondary">
        <Label n="08">Local discoverability</Label>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1]">Connecting the site to where locals search.</h2>
            <p className="text-lg text-foreground/80">The website names its service area (Pune, Pimpri, Chinchwad, Viman Nagar and nearby) and links directly to the business’s Google Business Profile, so visitors can verify location and reviews.</p>
            <p className="text-sm text-muted-foreground">The site displays a 4.7★ Google rating. That rating reflects customer reviews of the business and is not presented as an outcome of this design work.</p>
            <a href="https://www.google.com/maps/place/?q=place_id:ChIJMzXNyE3BwjsRop7cIuWIDqQ" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary">
              View Google Business Profile <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
          </div>
          <img src={about} alt="Manasvi team member cleaning a workplace" loading="lazy" className="w-full border-2 border-foreground shadow-brutal-lg" />
        </div>
      </Section>

      {/* Workflow */}
      <Section>
        <Label n="09">Design to launch</Label>
        <h2 className="font-serif-display text-4xl md:text-5xl leading-[1] max-w-3xl mb-10">From Figma to a live site.</h2>
        <ol className="grid md:grid-cols-4 border-2 border-foreground">
          {[
            ["Understand", "Services, areas, hours and contact channels gathered from the client."],
            ["Structure", "Section order planned around the visitor’s questions."],
            ["Design", "Layouts, brand application and components designed in Figma."],
            ["Launch", "Responsive site published at manasvifacilityservices.com."],
          ].map(([t, d], i) => (
            <li key={t} className={`p-6 ${i ? "border-t-2 md:border-t-0 md:border-l-2" : ""} border-foreground`}>
              <span className="font-serif-display text-4xl italic text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="font-semibold mt-3">{t}</p>
              <p className="text-sm text-muted-foreground mt-1">{d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Outcomes */}
      <Section className="bg-foreground text-background">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">10 — Outcomes & deliverables</p>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif-display text-4xl md:text-5xl leading-[1] mb-8">What shipped</h2>
            <ul className="grid grid-cols-2 gap-4">
              {[["1", "Live responsive website"], ["6", "Services presented"], ["3", "Contact channels: call, WhatsApp, form"], ["1", "Consistent web brand system"]].map(([n, t]) => (
                <li key={t} className="border-2 border-background p-5">
                  <p className="font-serif-display text-5xl text-accent">{n}</p>
                  <p className="text-sm mt-2 opacity-80">{t}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-2 border-background p-8 self-start">
            <h3 className="font-serif-display text-3xl mb-4">Measured impact</h3>
            <p className="opacity-80 text-lg">Project outcomes were primarily deliverable-based; business performance metrics were not available for this case study.</p>
          </div>
        </div>
      </Section>

      {/* Reflection */}
      <Section>
        <Label n="11">Reflection</Label>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            ["What I learned", "For local services, trust is visual and immediate: real people, a named owner and an area map do more than polished claims."],
            ["What I’d validate next", "Quick usability sessions with society managers and clinic staff to see how they choose a service and which contact route they prefer."],
            ["Future opportunities", "Add analytics and call/WhatsApp tracking, deepen local SEO with per-service pages, and review the Google profile content regularly."],
          ].map(([t, d]) => (
            <div key={t} className="brutal-card p-6"><h3 className="font-serif-display text-2xl mb-3">{t}</h3><p className="text-foreground/80">{d}</p></div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] mb-10">See it live.</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={SITE} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 border-2 border-foreground shadow-brutal-accent font-semibold hover:bg-primary transition-colors">
              Visit manasvifacilityservices.com <ArrowUpRight className="w-4 h-4" aria-hidden />
            </a>
            <Link to="/#work" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground font-semibold hover:text-primary hover:border-primary">
              <ArrowLeft className="w-4 h-4" aria-hidden /> All case studies
            </Link>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            <Link to="/case-study/delivery-revamp" className="brutal-card p-5 block"><p className="text-xs uppercase tracking-widest text-muted-foreground">Next case study</p><p className="font-serif-display text-2xl mt-1">Delivery Partner App Revamp →</p></Link>
            <Link to="/case-study/delivery" className="brutal-card p-5 block"><p className="text-xs uppercase tracking-widest text-muted-foreground">Related</p><p className="font-serif-display text-2xl mt-1">Youhonk Delivery App →</p></Link>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default CaseStudyManasvi;
