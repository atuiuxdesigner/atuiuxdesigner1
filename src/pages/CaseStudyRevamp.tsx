import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Target,
  MapPin,
  Camera,
  Scale,
  Info,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.svg";

import heroOverview from "@/assets/revamp/hero-overview.png";
import photoArea from "@/assets/revamp/photo-area.png";
import evoHomeV1 from "@/assets/revamp/mockup-screen-3-hero.png";
import evoHomeV2 from "@/assets/revamp/mockup-screen-3-hero-2.png";
import evoHomeV3 from "@/assets/revamp/mockup-screen-3-hero-3.png";
import evoPickupV1 from "@/assets/revamp/mockup-screen-3-hero-4.png";
import evoPickupV2 from "@/assets/revamp/mockup-screen-3-hero-5.png";
import evoPickupV3 from "@/assets/revamp/mockup-screen-3-hero-6.png";
import joinWorkshopScreen from "@/assets/revamp/join-workshop-screen.png";
import pickupMapScreen from "@/assets/revamp/pickup-map-screen.png";
import ordersScreen from "@/assets/revamp/orders-screen.png";
import screenMockup1 from "@/assets/revamp/screen-mockup.png";
import screenMockup2 from "@/assets/revamp/screen-mockup-2.png";
import screenMockup3 from "@/assets/revamp/screen-mockup-3.png";
import screenMockup4 from "@/assets/revamp/screen-mockup-4.png";

const SectionLabel = ({ num, text }: { num: string; text: string }) => (
  <div className="flex items-center gap-2">
    <span className="text-base font-bold text-primary">{num}</span>
    <span className="w-1 h-1 rounded-full bg-primary" />
    <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-foreground/70 underline underline-offset-4">
      {text}
    </span>
  </div>
);

const Chip = ({ children, tone = "muted" }: { children: React.ReactNode; tone?: "muted" | "accent" | "primary" }) => (
  <span
    className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 border-2 border-foreground ${
      tone === "accent"
        ? "bg-accent text-foreground"
        : tone === "primary"
        ? "bg-primary text-primary-foreground border-primary"
        : "bg-background text-foreground/75"
    }`}
  >
    {children}
  </span>
);

const problems = [
  {
    num: "01",
    title: "Cognitive Overload",
    body:
      "Partners juggled too many screens for a simple pickup. There was no step progression indicator, creating constant anxiety about what to do next.",
    foot: "Anxiety in every pickup",
  },
  {
    num: "02",
    title: "Missing State Awareness",
    body:
      "The app displayed views, not states. Partners had no real-time indicator on transit status, OTP validations, or arrival confirmations.",
    foot: "No clear status in motion",
  },
  {
    num: "03",
    title: "No Workshop Self-Service",
    body:
      "Workshop relations and onboardings were strictly admin-managed. Partners were dependent on backend teams to assign them to hubs.",
    foot: "Earnings blocked by admin",
  },
];

const insights = [
  {
    icon: Target,
    title: "Single-Action Focus",
    body:
      "Field workers require single-action screens. Remove secondary dashboard clutter and push the primary operational action to the forefront.",
    foot: "One task at a time",
  },
  {
    icon: MapPin,
    title: "High-Context Shifting",
    body:
      "Traffic, location, and customer availability shift every minute. The interface must adapt and remain legible under direct sunlight.",
    foot: "Built for changing context",
  },
  {
    icon: Camera,
    title: "Immutable Evidence Capture",
    body:
      "Photos, OTP validations, and odometer readings are crucial proof of service. The capture flow must be completely bulletproof.",
    foot: "Proof that never fails",
  },
  {
    icon: Scale,
    title: "Symmetric Earning Potential",
    body:
      "More workshop affiliations translate directly to more orders. Decentralizing the relationship bottleneck boosts partner earnings.",
    foot: "More hubs = more income",
  },
];

const evolutionHome = [
  { img: evoHomeV1, caption: "Static layout · No task separation", highlight: false },
  { img: evoHomeV2, caption: "Teal branding applied · Same structure", highlight: false },
  {
    img: evoHomeV3,
    highlight: true,
    bullets: ["Color-coded task tags", "Multiple active orders", "Workshop self-assignment CTA"],
  },
];

const evolutionPickup = [
  { img: evoPickupV1, caption: "No state tracking · Static map overlay", highlight: false },
  { img: evoPickupV2, caption: "Branded teal components · OTP integrated", highlight: false },
  {
    img: evoPickupV3,
    highlight: true,
    bullets: ["Step progress indicators", "Secure OTP verification flow", "Rich vehicle + workshop context"],
  },
];

const principles = [
  { tag: "State-First", body: "Every screen represents a precise step in the delivery state machine." },
  { tag: "One Primary Action", body: "Each step has exactly one clear action to take next." },
  { tag: "Color-Coded Tasks", body: "Instant cognitive parsing: Green for pickups, Orange for drop-offs." },
  { tag: "Progressive Info", body: "Crucial maps collapse or expand to show metadata smoothly." },
  { tag: "Self-Service", body: "Decentralized onboarding, KYC verification, and assignments." },
];

const dives = [
  {
    module: "Module A",
    title: "Workshop Discovery",
    body:
      "No more admin bottleneck. Partners can search workshops by location or name, type invite codes, scan workshop QR codes, and request assignments directly.",
    tags: ["Self-Service", "QR Integrated"],
    img: joinWorkshopScreen,
  },
  {
    module: "Module B",
    title: "Reimagined Pickup Flow",
    body:
      "Step-by-step progress from assignment to pickup completion. Interactive maps, OTP entries, mandatory vehicle proof uploads, and animated confirmation steps.",
    tags: ["Proof Captured", "OTP Secure"],
    img: pickupMapScreen,
  },
  {
    module: "Module C",
    title: "Active Order Sprints",
    body:
      "Quick access date filters (Today, Tomorrow, Sprints) and direct order state indicators make dispatch clear and organized, allowing optimized multiple deliveries.",
    tags: ["Date Filtered", "Batch Dispatch"],
    img: ordersScreen,
  },
];

const states = ["1. Assigned", "2. En Route", "3. At Location", "4. OTP Checked", "5. Photos Taken", "6. Completed"];

const improvements = [
  { img: screenMockup1, title: "Secure Pickup", body: "Dual verification using a secure OTP flow with simple layout triggers." },
  { img: screenMockup2, title: "Document Upload", body: "Fast photo evidence capture built straight into the camera widget." },
  { img: screenMockup3, title: "Smart Navigation", body: "Map view displays traffic status and real-time transit duration estimations." },
  { img: screenMockup4, title: "Celebration State", body: "A satisfying success animation reward on completing logistics tasks." },
];

const metrics = [
  { value: "40%", label: "Fewer steps in delivery flows" },
  { value: "3", label: "Self-service options launched" },
  { value: "49", label: "State-aware screens redesigned" },
  { value: "1", label: "Unified Youhonk Design System" },
];

const proofs = [
  { title: "Reduced Load", body: "No more screen-juggling. Simple single-action tasks defined perfectly per transit state." },
  { title: "Error Recovery", body: "Edge cases like network drops, verification fails, and vehicle issues are easily recoverable." },
  { title: "Scalable Onboarding", body: "Workshop managers can onboard delivery partners directly, removing admin dependency." },
  { title: "Visual Consistency", body: "Clean color-coding schemes make tasks quickly readable under extreme sunlight environments." },
];

const learnings = [
  {
    num: "01",
    title: "Field partners are not desk workers",
    body:
      "Don't force desktop dashboards on riders. Deliver the single next action directly so they can execute operations without cognitive stress.",
  },
  {
    num: "02",
    title: "State machines beat static galleries",
    body:
      "Model real-world physical transitions perfectly rather than guessing static UI structures. If the physical state shifts, the UI states must mirror it.",
  },
  {
    num: "03",
    title: "Self-service models scale easily",
    body:
      "Decentralizing onboarding actions directly into the hubs removes manual admin tasks and lets the fleet operation scale seamlessly.",
  },
  {
    num: "04",
    title: "The edge cases are the real design",
    body:
      "The happy flow takes care of itself. Excellence and field trust are established inside error handling and recoverability flows.",
  },
];

const v1Rows = ["Personal Info", "Vehicle Info", "History", "Logout"];
const v2Rows = [
  { label: "Personal Details", badge: "›" },
  { label: "ID Card Verification", badge: "›" },
  { label: "KYC Details Status", badge: "VERIFIED" },
  { label: "Hub Assignment", badge: "›" },
  { label: "Training Tutorials", badge: "›" },
  { label: "Sign Out", badge: "" },
];

const EvolutionRow = ({
  heading,
  items,
  captionTitle,
  captionBody,
}: {
  heading: string;
  items: { img: string; caption?: string; highlight: boolean; bullets?: string[] }[];
  captionTitle: string;
  captionBody: string;
}) => (
  <div className="space-y-4">
    <p className="text-lg font-bold uppercase tracking-wide text-foreground">{heading}</p>
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, i) => (
        <div key={i} className="space-y-3">
          <div
            className={`flex justify-center bg-secondary py-6 px-3 border-2 ${
              item.highlight ? "border-primary shadow-brutal" : "border-foreground/20"
            }`}
          >
            <img
              src={item.img}
              alt={`${heading} version ${i + 1}`}
              loading="lazy"
              className="w-[181px] h-[400px] object-cover object-top rounded-xl border border-foreground/20"
            />
          </div>
          {item.caption && <p className="text-xs text-foreground/60">{item.caption}</p>}
          {item.bullets && (
            <ul className="space-y-1.5">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-xs font-semibold text-foreground/80">
                  <span className="w-2 h-2 bg-primary" />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
    <div className="pt-2 space-y-2">
      <p className="text-sm font-semibold text-primary underline underline-offset-4">{captionTitle}</p>
      <p className="text-sm text-foreground/70 max-w-4xl">{captionBody}</p>
    </div>
  </div>
);

const CaseStudyRevamp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Youhonk Delivery Partner App Revamp — UX Case Study | Atul Thorat</title>
        <meta
          name="description"
          content="How I rebuilt the Youhonk delivery partner app around delivery states — 49 screens, 40% fewer steps, and three new self-service features."
        />
        <link rel="canonical" href="https://atuiuxdesigner.lovable.app/case-study/delivery-revamp" />
        <meta property="og:title" content="Youhonk Delivery Partner App Revamp — UX Case Study" />
        <meta
          property="og:description"
          content="A state-first redesign of a delivery partner app: 49 screens, 40% fewer steps, three new self-service features."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://atuiuxdesigner.lovable.app/case-study/delivery-revamp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Youhonk Delivery Partner App Revamp — UX Case Study" />
        <meta
          name="twitter:description"
          content="A state-first redesign of a delivery partner app: 49 screens, 40% fewer steps, three new self-service features."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b-2 border-foreground">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src={logo}
                alt="Atul Thorat Logo"
                className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link to="/#work">
                <Button variant="ghost" size="sm" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="pt-16">
          {/* 01 — Hero + project overview */}
          <section className="border-b-2 border-foreground">
            <div className="container mx-auto px-6 py-14 md:py-20 space-y-10">
              <div className="space-y-5 max-w-4xl">
                <Chip tone="accent">Case Study · 2025</Chip>
                <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-foreground">
                  Delivery Partner App Revamp
                </h1>
                <p className="text-lg md:text-xl text-foreground/75">
                  Youhonk Delivery Partners — rebuilding a field app around the real states of a vehicle pickup,
                  not a gallery of static screens.
                </p>
                <div className="flex flex-wrap gap-8 pt-2">
                  {[
                    { k: "Role", v: "Product / UX Designer" },
                    { k: "Timeline", v: "2024 → 2025" },
                    { k: "Platform", v: "Android · Field ops" },
                  ].map((m) => (
                    <div key={m.k}>
                      <p className="text-xs uppercase tracking-wider text-foreground/55">{m.k}</p>
                      <p className="font-semibold text-foreground">{m.v}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4 pt-2">
                  {[
                    ["49", "screens"],
                    ["40%", "fewer steps"],
                    ["3", "new features"],
                  ].map(([v, l]) => (
                    <div key={l} className="border-2 border-foreground shadow-brutal px-5 py-3">
                      <p className="font-serif-display text-3xl text-primary leading-none">{v}</p>
                      <p className="text-xs uppercase tracking-wider text-foreground/60 mt-1">{l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src={heroOverview}
                alt="Youhonk delivery partner app revamp overview"
                className="w-full border-2 border-foreground shadow-brutal-lg"
              />
            </div>
          </section>

          {/* 02 — Problem + research */}
          <section className="border-b-2 border-foreground bg-secondary/40">
            <div className="container mx-auto px-6 py-16 md:py-24 space-y-14">
              <div className="space-y-4">
                <SectionLabel num="01" text="The problem & research insights" />
                <h2 className="font-serif-display text-3xl md:text-5xl leading-tight text-foreground max-w-4xl">
                  The old experience made the partner work harder than the logistics job itself
                </h2>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-primary underline underline-offset-4">The friction we found</p>
                  <p className="text-xl md:text-2xl font-bold text-foreground max-w-3xl">
                    Three operational pain points that turned every pickup into a cognitive battle.
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                  {problems.map((p) => (
                    <div key={p.num} className="flex bg-background border-2 border-foreground shadow-brutal">
                      <div className="w-1.5 bg-primary" />
                      <div className="p-6 md:p-7 space-y-5 flex-1">
                        <div className="flex items-center gap-4">
                          <span className="font-serif-display text-2xl text-primary">{p.num}</span>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground">{p.title}</h3>
                        </div>
                        <p className="text-sm text-foreground/70">{p.body}</p>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-xs font-semibold text-primary">{p.foot}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-8 lg:grid-cols-[420px_1fr] items-start">
                <div className="bg-background border-2 border-foreground shadow-brutal overflow-hidden">
                  <img src={photoArea} alt="Field interview with Rajesh Kumar, bike rider at Pune Hub" className="w-full h-80 object-cover" />
                  <div className="p-7 space-y-5">
                    <p className="font-serif-display text-4xl text-primary leading-none">&ldquo;</p>
                    <p className="text-base text-foreground">
                      I manage 3 to 5 vehicle pickups daily across multiple busy workshops. I am constantly on the road.
                      If the app freezes, or if I have to call support to confirm a drop-off, I lose valuable time and money.
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold uppercase tracking-wider text-primary">Goals &amp; pain points</p>
                      <p className="text-xs text-foreground/70">• Needs zero-click transitions while driving</p>
                      <p className="text-xs text-foreground/70">• Wants proof of photo upload to avoid customer disputes</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">Operational Insights from the Field</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {insights.map((i) => (
                      <div key={i.title} className="bg-background border-2 border-foreground p-6 space-y-4">
                        <div className="w-10 h-10 flex items-center justify-center bg-accent border-2 border-foreground">
                          <i.icon className="w-5 h-5 text-foreground" />
                        </div>
                        <h4 className="text-lg font-bold text-foreground">{i.title}</h4>
                        <p className="text-sm text-foreground/70">{i.body}</p>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-xs font-semibold text-primary">{i.foot}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 03 — Design evolution */}
          <section className="border-b-2 border-foreground">
            <div className="container mx-auto px-6 py-16 md:py-24 space-y-12">
              <div className="space-y-4">
                <SectionLabel num="02" text="Design evolution" />
                <h2 className="font-serif-display text-3xl md:text-5xl text-foreground">
                  Three generations. One operational problem.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {[
                  "1. Wireframe v1 (Structure)",
                  "2. Visual Design v1 (Styling)",
                  "3. Revamp v2 (State-Aware)",
                ].map((h, i) => (
                  <div
                    key={h}
                    className={`border-2 p-3 font-bold ${
                      i === 2 ? "border-primary bg-primary/10 text-primary" : "border-foreground text-foreground"
                    }`}
                  >
                    {h}
                  </div>
                ))}
              </div>

              <EvolutionRow
                heading="A. Home & order management"
                items={evolutionHome}
                captionTitle="From static layout to state-aware operations"
                captionBody="The revamp introduces color-coded task separation, multi-order awareness, and a clear self-assignment CTA — turning a static dashboard into a live operational cockpit."
              />
              <EvolutionRow
                heading="B. The active pickup flow"
                items={evolutionPickup}
                captionTitle="From static map to guided pickup flow"
                captionBody="The final revamp adds step-by-step progress, secure OTP verification, and richer vehicle and workshop context — making the pickup flow feel guided, secure, and operationally reliable."
              />
            </div>
          </section>

          {/* 04 — Solution */}
          <section className="border-b-2 border-foreground bg-secondary/40">
            <div className="container mx-auto px-6 py-16 md:py-24 space-y-14">
              <div className="space-y-4">
                <SectionLabel num="03" text="The solution" />
                <h2 className="font-serif-display text-3xl md:text-5xl text-foreground max-w-4xl">
                  Five principles now drive the delivery experience
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {principles.map((p, i) => (
                  <div key={p.tag} className="bg-background border-2 border-foreground p-6 space-y-4">
                    <div className="w-11 h-11 flex items-center justify-center bg-accent border-2 border-foreground font-bold">
                      {`0${i + 1}`}
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{p.tag}</h3>
                    <p className="text-sm text-foreground/70">{p.body}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Feature Showcase &amp; Design Decisions</h3>
                <div className="space-y-6">
                  {dives.map((d) => (
                    <div
                      key={d.module}
                      className="flex flex-col md:flex-row gap-8 items-center bg-background border-2 border-foreground shadow-brutal p-6 md:p-8"
                    >
                      <div className="flex-1 space-y-4">
                        <Chip tone="primary">{d.module}</Chip>
                        <h4 className="text-xl md:text-2xl font-bold text-foreground">{d.title}</h4>
                        <p className="text-sm md:text-base text-foreground/70">{d.body}</p>
                        <div className="flex flex-wrap gap-2">
                          {d.tags.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      </div>
                      <div className="bg-secondary border-2 border-foreground p-3 shrink-0">
                        <img
                          src={d.img}
                          alt={d.title}
                          loading="lazy"
                          className="w-[220px] h-[440px] object-cover object-top rounded-xl"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 05 — Interaction story */}
          <section className="border-b-2 border-foreground">
            <div className="container mx-auto px-6 py-16 md:py-24 space-y-14">
              <div className="space-y-4">
                <SectionLabel num="04" text="Interaction story" />
                <h2 className="font-serif-display text-3xl md:text-5xl text-foreground max-w-4xl">
                  A delivery is a state machine — not a gallery of static screens
                </h2>
              </div>

              <div className="border-2 border-foreground p-6 md:p-10 space-y-6">
                <h3 className="text-xl font-bold text-foreground">Task State Progression Flow</h3>
                <div className="flex flex-wrap items-center gap-3">
                  {states.map((s, i) => (
                    <div key={s} className="flex items-center gap-3">
                      <div
                        className={`border-2 px-4 py-2.5 font-bold text-sm md:text-base ${
                          i === 0 ? "border-foreground/40 text-foreground" : "border-primary text-foreground"
                        }`}
                      >
                        {s}
                      </div>
                      {i < states.length - 1 && <ChevronRight className="w-5 h-5 text-foreground/40" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {improvements.map((im) => (
                  <div key={im.title} className="border-2 border-foreground overflow-hidden bg-background">
                    <img src={im.img} alt={im.title} loading="lazy" className="w-full h-[280px] object-cover object-top" />
                    <div className="p-6 space-y-3 border-t-2 border-foreground">
                      <div className="w-10 h-1 bg-primary" />
                      <h4 className="text-lg font-bold text-foreground">{im.title}</h4>
                      <p className="text-xs text-foreground/70">{im.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Profile comparison */}
              <div className="grid gap-10 lg:grid-cols-[440px_1fr] items-start">
                <div className="space-y-5">
                  <h3 className="text-2xl font-bold text-foreground">Profile Overhaul Comparison</h3>
                  <p className="text-sm text-foreground/70">
                    We redesigned the profile screen from a simple 4-row view into a functional 6-row manager hub.
                    Partners can now check KYC status instantly, discover training materials, configure hubs, and
                    manage work hours independently.
                  </p>
                  <div className="flex items-center gap-2.5 border-2 border-primary p-4">
                    <Info className="w-4 h-4 text-primary shrink-0" />
                    <p className="text-xs text-foreground/75">
                      The V2 hub reduced support tickets by removing the need for agent-assisted profile edits.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="border-2 border-foreground p-6 space-y-4">
                    <div>
                      <p className="font-bold text-foreground/70">V1 PROFILE SCREEN</p>
                      <p className="text-xs text-foreground/60">Basic · 4 rows</p>
                    </div>
                    <span className="inline-block text-xs font-semibold bg-secondary px-2.5 py-1">2024 - Launched</span>
                    <div className="space-y-2">
                      {v1Rows.map((r) => (
                        <div key={r} className="flex items-center gap-2.5 bg-secondary border border-foreground/20 py-3 px-4">
                          <span className="w-1.5 h-1.5 bg-foreground/30" />
                          <span className="text-xs text-foreground/70">{r}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-foreground/60 bg-secondary p-3">
                      Missing: KYC status, training, workshop management, and self-service tools
                    </p>
                  </div>

                  <div className="border-2 border-primary p-6 space-y-4">
                    <div>
                      <p className="font-bold text-primary">V2 PROFILE HUB</p>
                      <p className="text-xs text-primary/80">Self-Service · 6 rows</p>
                    </div>
                    <span className="inline-block text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1">
                      2025 - Redesigned
                    </span>
                    <div className="space-y-2">
                      {v2Rows.map((r) => (
                        <div
                          key={r.label}
                          className="flex items-center gap-2.5 bg-secondary border border-foreground/20 py-3 px-4"
                        >
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-xs text-foreground flex-1">{r.label}</span>
                          {r.badge === "VERIFIED" ? (
                            <Chip tone="accent">Verified</Chip>
                          ) : (
                            <span className="text-xs text-foreground/50">{r.badge}</span>
                          )}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-primary-foreground bg-primary p-3">
                      +2 new rows · KYC inline status · Self-service training and hub management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 06 — Impact & learnings */}
          <section className="bg-secondary/40">
            <div className="container mx-auto px-6 py-16 md:py-24 space-y-14">
              <div className="space-y-4">
                <SectionLabel num="05" text="Impact & key learnings" />
                <h2 className="font-serif-display text-3xl md:text-5xl text-foreground max-w-4xl">
                  Design evidence now. Operational performance achieved.
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-background border-2 border-foreground shadow-brutal py-8 px-6 space-y-3">
                    <p className="font-serif-display text-5xl text-primary leading-none">{m.value}</p>
                    <div className="w-10 h-1 bg-accent" />
                    <p className="text-sm text-foreground/70">{m.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {proofs.map((p) => (
                  <div key={p.title} className="flex gap-4 bg-background border-2 border-foreground p-6">
                    <div className="w-2 bg-primary shrink-0" />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                      <p className="text-sm text-foreground/70">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h3 className="font-serif-display text-3xl md:text-4xl text-foreground">
                  Design Learnings &amp; Retrospectives
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  {learnings.map((l) => (
                    <div key={l.num} className="flex gap-6 bg-background border-2 border-foreground p-6 md:p-8">
                      <div className="w-16 h-16 shrink-0 rounded-full bg-accent border-2 border-foreground flex items-center justify-center font-serif-display text-2xl text-foreground">
                        {l.num}
                      </div>
                      <div className="space-y-3">
                        <h4 className="text-xl md:text-2xl font-bold text-foreground">{l.title}</h4>
                        <p className="text-sm md:text-base text-foreground/70">{l.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t-2 border-foreground pt-10">
                <Link to="/#work">
                  <Button variant="outline" className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to all work
                  </Button>
                </Link>
                <p className="text-sm text-foreground/60">© 2026 Atul Thorat. Crafted for Excellence.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default CaseStudyRevamp;
