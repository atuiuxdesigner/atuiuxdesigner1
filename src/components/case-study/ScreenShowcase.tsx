 import { cn } from "@/lib/utils";
 import PhoneMockup from "./PhoneMockup";
 
 interface Screen {
   image: string;
   alt: string;
   caption?: string;
 }
 
 interface ScreenShowcaseProps {
   title: string;
   description: string;
   screens: Screen[];
   className?: string;
 }
 
 const ScreenShowcase = ({ title, description, screens, className }: ScreenShowcaseProps) => {
   return (
     <div className={cn("py-16 md:py-24", className)}>
       <div className="container mx-auto px-4 md:px-6">
         <div className="text-center mb-12">
           <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h3>
           <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
         </div>
         
         {/* Scrollable container */}
         <div className="relative">
           <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-primary/30 scrollbar-track-transparent">
             <div className="flex gap-6 md:gap-8 px-4 min-w-max">
               {screens.map((screen, index) => (
                 <PhoneMockup
                   key={index}
                   screenImage={screen.image}
                   alt={screen.alt}
                   caption={screen.caption}
                 />
               ))}
             </div>
           </div>
           
           {/* Scroll hint gradient */}
           <div className="absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
         </div>
       </div>
     </div>
   );
 };
 
 export default ScreenShowcase;