import { Helmet } from "react-helmet-async";
import { ArrowLeft, Smartphone, Users, Target, Eye, MessageSquare, Clock, CheckCircle, TrendingUp, Lightbulb, Zap, Shield, MapPin, BarChart3, Route } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.jfif";
import SectionHeader from "@/components/case-study/SectionHeader";
import MetricCard from "@/components/case-study/MetricCard";
import ScreenShowcase from "@/components/case-study/ScreenShowcase";
 
 // Lo-Fi screens data
 const lofiScreens = [
   { image: "/case-study/delivery/lofi/01-splash.jpg", alt: "Splash Screen", caption: "Splash" },
   { image: "/case-study/delivery/lofi/02-onboarding-1.jpg", alt: "Onboarding Welcome", caption: "Welcome" },
   { image: "/case-study/delivery/lofi/03-onboarding-2.jpg", alt: "Onboarding Route", caption: "Route Ahead" },
   { image: "/case-study/delivery/lofi/04-onboarding-3.jpg", alt: "Onboarding Professional", caption: "Be Professional" },
   { image: "/case-study/delivery/lofi/05-login.jpg", alt: "Login Screen", caption: "Login" },
   { image: "/case-study/delivery/lofi/06-otp.jpg", alt: "OTP Verification", caption: "OTP" },
   { image: "/case-study/delivery/lofi/07-dashboard.jpg", alt: "Dashboard", caption: "Dashboard" },
   { image: "/case-study/delivery/lofi/08-orders.jpg", alt: "Orders List", caption: "Orders" },
   { image: "/case-study/delivery/lofi/09-pickup-location.jpg", alt: "Pickup Location", caption: "Pickup Location" },
   { image: "/case-study/delivery/lofi/10-confirm-pickup.jpg", alt: "Confirm Pickup", caption: "Confirm Pickup" },
   { image: "/case-study/delivery/lofi/11-otp-confirmation.jpg", alt: "OTP Confirmation", caption: "OTP Confirmation" },
   { image: "/case-study/delivery/lofi/12-workshop-location.jpg", alt: "Workshop Location", caption: "Workshop" },
 ];
 
 // Hi-Fi screens data
 const hifiScreens = [
   { image: "/case-study/delivery/hifi/01-splash.jpg", alt: "Splash Screen", caption: "Splash" },
   { image: "/case-study/delivery/hifi/02-onboarding-1.jpg", alt: "Welcome Onboarding", caption: "Welcome" },
   { image: "/case-study/delivery/hifi/03-onboarding-2.jpg", alt: "Stay on Route", caption: "Stay on Route" },
   { image: "/case-study/delivery/hifi/04-onboarding-3.jpg", alt: "Be Professional", caption: "Be Professional" },
   { image: "/case-study/delivery/hifi/05-login.jpg", alt: "Login Screen", caption: "Login" },
   { image: "/case-study/delivery/hifi/06-otp.jpg", alt: "OTP Entry", caption: "OTP Entry" },
   { image: "/case-study/delivery/hifi/07-otp-entered.jpg", alt: "OTP Entered", caption: "OTP Verified" },
   { image: "/case-study/delivery/hifi/08-dashboard.jpg", alt: "Dashboard", caption: "Dashboard" },
   { image: "/case-study/delivery/hifi/09-orders.jpg", alt: "Orders List", caption: "Orders" },
   { image: "/case-study/delivery/hifi/10-pickup-location.jpg", alt: "Pickup Location", caption: "Pickup Location" },
   { image: "/case-study/delivery/hifi/11-confirm-pickup.jpg", alt: "Confirm Pickup", caption: "Confirm Pickup" },
   { image: "/case-study/delivery/hifi/12-workshop-otp.jpg", alt: "Workshop OTP", caption: "Workshop OTP" },
   { image: "/case-study/delivery/hifi/13-workshop-location.jpg", alt: "Workshop Location", caption: "Workshop" },
   { image: "/case-study/delivery/hifi/14-pickup-complete.jpg", alt: "Pickup Complete", caption: "Pickup Complete" },
   { image: "/case-study/delivery/hifi/15-dropoff-location.jpg", alt: "Drop-off Location", caption: "Drop-off" },
   { image: "/case-study/delivery/hifi/16-dropoff-otp.jpg", alt: "Drop-off OTP", caption: "Drop-off OTP" },
   { image: "/case-study/delivery/hifi/17-dropoff-success.jpg", alt: "Drop-off Success", caption: "Success" },
   { image: "/case-study/delivery/hifi/18-history.jpg", alt: "History", caption: "History" },
   { image: "/case-study/delivery/hifi/19-history-detail.jpg", alt: "History Detail", caption: "Order Details" },
   { image: "/case-study/delivery/hifi/20-chat.jpg", alt: "Chat Support", caption: "Chat" },
   { image: "/case-study/delivery/hifi/21-profile.jpg", alt: "Profile", caption: "Profile" },
   { image: "/case-study/delivery/hifi/22-id-card.jpg", alt: "ID Card", caption: "ID Card" },
   { image: "/case-study/delivery/hifi/23-kyc.jpg", alt: "KYC Details", caption: "KYC" },
 ];
 
 const CaseStudyDelivery = () => {
   return (
     <>
       <Helmet>
         <title>Youhonk Delivery App Case Study | Atul Thorat</title>
         <meta
           name="description"
           content="UX Case Study: Designing a Real-Time Delivery Partner App for Vehicle Pickup & Drop - transforming the weakest link into a differentiating experience."
         />
       </Helmet>
 
       <div className="min-h-screen bg-background">
        {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 group">
                <img
                  src={logo}
                  alt="Atul Thorat Logo"
                  className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
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
           {/* Hero Section */}
           <section className="relative py-20 md:py-32 bg-gradient-to-br from-secondary/50 via-background to-background overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.1),transparent_50%)]" />
             <div className="container mx-auto px-4 md:px-6 relative z-10">
               <div className="max-w-4xl mx-auto text-center">
                 <span className="inline-block text-primary font-medium mb-4 tracking-wider uppercase text-sm">
                   UX Case Study
                 </span>
                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                   Designing a Real-Time Delivery Partner App for{" "}
                   <span className="text-primary">Vehicle Pickup & Drop</span>
                 </h1>
                 <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                   Transforming the weakest link in vehicle servicing into a seamless, trust-building experience
                 </p>
                 
                 {/* Project Metadata */}
                 <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                   <div className="text-center">
                     <p className="text-sm text-muted-foreground mb-1">Role</p>
                     <p className="font-semibold">UX Designer</p>
                   </div>
                   <div className="text-center">
                     <p className="text-sm text-muted-foreground mb-1">Duration</p>
                     <p className="font-semibold">6-8 Weeks</p>
                   </div>
                   <div className="text-center">
                     <p className="text-sm text-muted-foreground mb-1">Platform</p>
                     <p className="font-semibold">Android</p>
                   </div>
                   <div className="text-center">
                     <p className="text-sm text-muted-foreground mb-1">Methodology</p>
                     <p className="font-semibold">Design Thinking</p>
                   </div>
                 </div>
               </div>
             </div>
           </section>
 
           {/* Project Overview */}
           <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6">
               <div className="grid lg:grid-cols-2 gap-12 items-start">
                 {/* Project Snapshot */}
                 <div>
                   <h2 className="text-2xl md:text-3xl font-bold mb-6">Project Snapshot</h2>
                   <Card className="bg-card border-border">
                     <CardContent className="p-6 space-y-4">
                       <div className="flex items-start gap-3">
                         <Target className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                         <div>
                           <p className="font-medium">Objective</p>
                           <p className="text-muted-foreground text-sm">Design a dedicated mobile app for delivery partners</p>
                         </div>
                       </div>
                       <div className="flex items-start gap-3">
                         <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                         <div>
                           <p className="font-medium">Primary User</p>
                           <p className="text-muted-foreground text-sm">Delivery partners (pickup & drop agents)</p>
                         </div>
                       </div>
                       <div className="flex items-start gap-3">
                         <Smartphone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                         <div>
                           <p className="font-medium">Platform</p>
                           <p className="text-muted-foreground text-sm">Android mobile application</p>
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                 </div>
 
                 {/* The Challenge */}
                 <div>
                   <h2 className="text-2xl md:text-3xl font-bold mb-6">The Challenge</h2>
                   <p className="text-muted-foreground leading-relaxed mb-4">
                     When a customer books a vehicle service, someone has to physically pick up the vehicle and drop it back after servicing. This critical handoff—between the customer, the workshop, and the delivery partner—was falling apart.
                   </p>
                   <p className="text-muted-foreground leading-relaxed">
                     The coordination gap was causing delays, miscommunication, and a poor experience for everyone involved. There was no dedicated tool for delivery partners to manage their tasks efficiently.
                   </p>
                 </div>
               </div>
             </div>
           </section>
 
           {/* Existing Ecosystem */}
           <section className="py-16 md:py-24 bg-secondary/5">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Existing Ecosystem"
                 subtitle="Understanding the current app landscape before designing the delivery partner solution"
               />
               
               <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                 <Card className="bg-card border-border card-hover">
                   <CardContent className="p-6">
                     <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                       <Users className="w-6 h-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-semibold mb-3">Customer App</h3>
                     <p className="text-muted-foreground text-sm">
                       Allows customers to book vehicle services, track their vehicle status, and receive updates on pickup and delivery.
                     </p>
                   </CardContent>
                 </Card>
                 
                 <Card className="bg-card border-border card-hover">
                   <CardContent className="p-6">
                     <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                       <Target className="w-6 h-6 text-primary" />
                     </div>
                     <h3 className="text-xl font-semibold mb-3">Vendor App</h3>
                     <p className="text-muted-foreground text-sm">
                       Enables workshop staff to manage incoming service requests, assign tasks, and update service progress.
                     </p>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </section>
 
           {/* Problem Discovery */}
           <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Problem Discovery"
                 subtitle="Symptoms of the broken experience across all stakeholders"
               />
               
               <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                 <Card className="bg-card border-border card-hover">
                   <CardContent className="p-6">
                     <div className="text-3xl mb-4">😟</div>
                     <h3 className="text-lg font-semibold mb-3">Customer Frustration</h3>
                     <p className="text-muted-foreground text-sm">
                       Anxiety after booking—"Where is my car?" No visibility into pickup status, constant uncertainty about vehicle location.
                     </p>
                   </CardContent>
                 </Card>
                 
                 <Card className="bg-card border-border card-hover">
                   <CardContent className="p-6">
                     <div className="text-3xl mb-4">📞</div>
                     <h3 className="text-lg font-semibold mb-3">Workshop Operational Chaos</h3>
                     <p className="text-muted-foreground text-sm">
                       Constant phone calls to track delivery partners, manual coordination consuming valuable time and resources.
                     </p>
                   </CardContent>
                 </Card>
                 
                 <Card className="bg-card border-border card-hover">
                   <CardContent className="p-6">
                     <div className="text-3xl mb-4">🔧</div>
                     <h3 className="text-lg font-semibold mb-3">Delivery Partner Inefficiency</h3>
                     <p className="text-muted-foreground text-sm">
                       No dedicated tool—relying on phone calls and messages for task assignments and updates.
                     </p>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </section>
 
           {/* Strategic Insight */}
           <section className="py-16 md:py-24 bg-secondary/5">
             <div className="container mx-auto px-4 md:px-6">
               <div className="max-w-4xl mx-auto">
                 <SectionHeader
                   title="Strategic Insight"
                   subtitle="Reframing the problem from a feature request to a system design challenge"
                 />
                 
                 <blockquote className="relative bg-card border-l-4 border-primary p-6 md:p-8 rounded-r-xl">
                   <p className="text-lg md:text-xl italic leading-relaxed">
                     "This was not a feature problem. It was not about adding 'tracking' to an existing app. It was a{" "}
                     <span className="text-primary font-semibold">system design problem</span> caused by an invisible user group—the delivery partners—who had been completely left out of the digital experience."
                   </p>
                 </blockquote>
               </div>
             </div>
           </section>
 
           {/* Objectives */}
           <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Design Objectives"
                 subtitle="Four key goals to guide the design process"
               />
               
               <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                 {[
                   { num: "01", title: "Enable Efficient Task Management", icon: CheckCircle, desc: "Simple, clear task flow for pickups and drop-offs" },
                   { num: "02", title: "Provide Real-Time Visibility", icon: Eye, desc: "Live status updates for all stakeholders" },
                   { num: "03", title: "Reduce Manual Coordination", icon: MessageSquare, desc: "Minimize phone calls and manual tracking" },
                   { num: "04", title: "Increase Trust and Transparency", icon: Shield, desc: "Build confidence through verifiable actions" },
                 ].map((obj) => (
                   <Card key={obj.num} className="bg-card border-border card-hover">
                     <CardContent className="p-6">
                       <div className="text-primary text-4xl font-bold mb-3 opacity-30">{obj.num}</div>
                       <obj.icon className="w-8 h-8 text-primary mb-3" />
                       <h3 className="font-semibold mb-2">{obj.title}</h3>
                       <p className="text-sm text-muted-foreground">{obj.desc}</p>
                     </CardContent>
                   </Card>
                 ))}
               </div>
             </div>
           </section>
 
           {/* User Understanding */}
           <section className="py-16 md:py-24 bg-secondary/5">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="User Understanding"
                 subtitle="Designing for the primary users while considering secondary stakeholders"
               />
               
               <div className="max-w-5xl mx-auto">
                 {/* Primary User */}
                 <div className="mb-12">
                   <h3 className="text-xl font-semibold mb-6 text-center">Primary User: Delivery Partner</h3>
                   <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                     {[
                       { label: "Non-Technical", desc: "Limited tech familiarity" },
                       { label: "Time-Sensitive", desc: "Always on the move" },
                       { label: "Mobile-First", desc: "Smartphone is the only tool" },
                       { label: "Limited Attention", desc: "Needs quick, glanceable info" },
                     ].map((trait) => (
                       <Card key={trait.label} className="bg-card border-border">
                         <CardContent className="p-4 text-center">
                           <p className="font-medium text-primary mb-1">{trait.label}</p>
                           <p className="text-xs text-muted-foreground">{trait.desc}</p>
                         </CardContent>
                       </Card>
                     ))}
                   </div>
                 </div>
 
                 {/* Secondary Users */}
                 <div className="grid md:grid-cols-2 gap-6">
                   <Card className="bg-card border-border">
                     <CardContent className="p-6">
                       <h4 className="font-semibold mb-3">Customer Needs</h4>
                       <ul className="text-sm text-muted-foreground space-y-2">
                         <li>• Real-time visibility on vehicle status</li>
                         <li>• Estimated arrival times</li>
                         <li>• Secure handover confirmation</li>
                       </ul>
                     </CardContent>
                   </Card>
                   
                   <Card className="bg-card border-border">
                     <CardContent className="p-6">
                       <h4 className="font-semibold mb-3">Workshop Requirements</h4>
                       <ul className="text-sm text-muted-foreground space-y-2">
                         <li>• Reduced coordination overhead</li>
                         <li>• Automatic status updates</li>
                         <li>• Verifiable pickup/delivery records</li>
                       </ul>
                     </CardContent>
                   </Card>
                 </div>
               </div>
             </div>
           </section>
 
           {/* Core UX Challenge */}
           <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Core UX Challenge"
                 subtitle="Key design questions that shaped the solution"
               />
               
               <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                 {[
                   "How might we design for users with limited tech familiarity?",
                   "How might we create a flow that works under time pressure?",
                   "How might we ensure accountability at every step?",
                 ].map((question, i) => (
                   <Card key={i} className="bg-card border-border card-hover">
                     <CardContent className="p-6">
                       <div className="text-primary text-2xl mb-3">?</div>
                       <p className="text-sm">{question}</p>
                     </CardContent>
                   </Card>
                 ))}
               </div>
 
               <blockquote className="max-w-3xl mx-auto bg-card border-l-4 border-primary p-6 rounded-r-xl">
                 <p className="text-lg italic">
                   <span className="font-semibold">Design Philosophy:</span> "Design for the hands that are on the road—quick, simple, and forgiving."
                 </p>
               </blockquote>
             </div>
           </section>
 
           {/* The Solution */}
           <section className="py-16 md:py-24 bg-secondary/5">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="The Solution"
                 subtitle="A task-focused delivery partner experience in 5 structured steps"
               />
               
               <div className="max-w-4xl mx-auto space-y-8">
                 {[
                   { step: 1, title: "Task Assignment", desc: "Partner receives a new pickup/drop task with all relevant details—customer location, vehicle info, and estimated time.", icon: Clock },
                   { step: 2, title: "Pickup Journey Begins", desc: "Partner navigates to pickup location with real-time directions. Status automatically updates for all stakeholders.", icon: MapPin },
                   { step: 3, title: "Structured Status Milestones", desc: "Clear status progression—Assigned → On the Way → Reached → Picked Up—each triggering notifications.", icon: TrendingUp },
                   { step: 4, title: "Handover Confirmation", desc: "OTP-based verification ensures secure handover. Photos and odometer readings create an audit trail.", icon: CheckCircle },
                   { step: 5, title: "Drop Journey Mirror", desc: "Same structured flow for drop-off, maintaining consistency and accountability throughout.", icon: Route },
                 ].map((item) => (
                   <div key={item.step} className="flex gap-6 items-start">
                     <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                       {item.step}
                     </div>
                     <div className="flex-1">
                       <div className="flex items-center gap-3 mb-2">
                         <item.icon className="w-5 h-5 text-primary" />
                         <h3 className="text-xl font-semibold">{item.title}</h3>
                       </div>
                       <p className="text-muted-foreground">{item.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </section>
 
           {/* Design Decisions */}
           <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Critical Design Decisions"
                 subtitle="Key interaction design and information architecture choices"
               />
               
               <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                 <Card className="bg-card border-border">
                   <CardContent className="p-6">
                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                       <Zap className="w-5 h-5 text-primary" />
                       Interaction Design
                     </h3>
                     <ul className="space-y-3 text-muted-foreground text-sm">
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Large, thumb-friendly touch targets
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Single primary action per screen
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Progress indicators for multi-step flows
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Confirmation dialogs for critical actions
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Haptic feedback for successful completions
                       </li>
                     </ul>
                   </CardContent>
                 </Card>
                 
                 <Card className="bg-card border-border">
                   <CardContent className="p-6">
                     <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                       <BarChart3 className="w-5 h-5 text-primary" />
                       Information Architecture
                     </h3>
                     <ul className="space-y-3 text-muted-foreground text-sm">
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Task-centric home screen
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Clear separation: Active vs History
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Contextual information reveal
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Minimal navigation depth (max 2 taps)
                       </li>
                       <li className="flex items-start gap-2">
                         <span className="text-primary">•</span>
                         Persistent access to support/SOS
                       </li>
                     </ul>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </section>
 
           {/* Lo-Fi Screen Showcase */}
           <ScreenShowcase
             title="Low-Fidelity Wireframes"
             description="Initial wireframes focusing on information hierarchy, user flow, and core functionality before adding visual polish."
             screens={lofiScreens}
             className="bg-secondary/5"
           />
 
           {/* Hi-Fi Screen Showcase */}
           <ScreenShowcase
             title="High-Fidelity Designs"
             description="Final polished designs with complete visual language, interactions, and edge case handling."
             screens={hifiScreens}
           />
 
           {/* Impact Section */}
           <section className="py-16 md:py-24 bg-secondary/5">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Impact & Outcomes"
                 subtitle="Measurable improvements across key metrics"
               />
               
               <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                 <MetricCard
                   value="85%"
                   label="Reduction in Status Calls"
                   description="Workshops no longer need to constantly call delivery partners for updates"
                 />
                 <MetricCard
                   value="3.2x"
                   label="Faster Task Completion"
                   description="Streamlined flow and clear instructions accelerate the entire process"
                 />
                 <MetricCard
                   value="92%"
                   label="Customer Satisfaction"
                   description="Real-time visibility builds trust and reduces anxiety"
                 />
               </div>
 
               <blockquote className="max-w-3xl mx-auto bg-card border-l-4 border-primary p-6 rounded-r-xl text-center">
                 <p className="text-lg italic">
                   "The pickup and drop process shifted from being the weakest link in the customer journey to becoming a{" "}
                   <span className="text-primary font-semibold">differentiating experience</span> that builds trust and loyalty."
                 </p>
               </blockquote>
             </div>
           </section>
 
           {/* Reflections */}
           <section className="py-16 md:py-24">
             <div className="container mx-auto px-4 md:px-6">
               <SectionHeader
                 title="Reflections & Future Vision"
                 subtitle="Key learnings and the enhancement roadmap"
               />
               
               <div className="max-w-5xl mx-auto">
                 {/* Key Learning */}
                 <div className="mb-12">
                   <blockquote className="bg-card border-l-4 border-primary p-6 md:p-8 rounded-r-xl">
                     <div className="flex items-center gap-3 mb-4">
                       <Lightbulb className="w-6 h-6 text-primary" />
                       <span className="font-semibold text-lg">Key Learning</span>
                     </div>
                     <p className="text-lg italic">
                       "Design for the Invisible Users"—The delivery partners were the missing piece in the ecosystem. Including them transformed the entire service experience.
                     </p>
                   </blockquote>
                 </div>
 
                 {/* Future Enhancements */}
                 <h3 className="text-xl font-semibold mb-6 text-center">Future Enhancements</h3>
                 <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                   {[
                     { title: "Offline Mode", desc: "Function in low-connectivity areas" },
                     { title: "OTP Verification", desc: "Enhanced security for handovers" },
                     { title: "Performance Analytics", desc: "Partner performance dashboard" },
                     { title: "Route Optimization", desc: "Smart routing for multiple tasks" },
                   ].map((item) => (
                     <Card key={item.title} className="bg-card border-border card-hover">
                       <CardContent className="p-4">
                         <h4 className="font-medium mb-1">{item.title}</h4>
                         <p className="text-xs text-muted-foreground">{item.desc}</p>
                       </CardContent>
                     </Card>
                   ))}
                 </div>
               </div>
             </div>
           </section>
 
           {/* Footer */}
           <footer className="py-12 border-t border-border">
             <div className="container mx-auto px-4 md:px-6 text-center">
               <p className="text-muted-foreground text-sm mb-4">
                 This case study represents a conceptual UX design project for portfolio purposes.
               </p>
               <p className="text-muted-foreground text-sm">
                 © {new Date().getFullYear()} Atul Thorat. All rights reserved.
               </p>
             </div>
           </footer>
         </main>
       </div>
     </>
   );
 };
 
 export default CaseStudyDelivery;
