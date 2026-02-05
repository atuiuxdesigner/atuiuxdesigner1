 import { cn } from "@/lib/utils";
 
 interface PhoneMockupProps {
   screenImage: string;
   alt: string;
   caption?: string;
   className?: string;
 }
 
 const PhoneMockup = ({ screenImage, alt, caption, className }: PhoneMockupProps) => {
   return (
     <div className={cn("flex flex-col items-center gap-3", className)}>
       {/* Phone Frame */}
       <div className="relative bg-secondary rounded-[2.5rem] p-2 shadow-xl transition-transform duration-300 hover:scale-105">
         {/* Inner bezel */}
         <div className="relative bg-background rounded-[2rem] overflow-hidden">
           {/* Notch */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-b-xl">
             <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
             <div className="w-12 h-1.5 rounded-full bg-muted-foreground/30" />
           </div>
           
           {/* Screen */}
           <div className="relative w-36 sm:w-40 md:w-48 aspect-[9/19.5] overflow-hidden">
             <img
               src={screenImage}
               alt={alt}
               className="w-full h-full object-cover object-top"
               loading="lazy"
             />
           </div>
           
           {/* Home Indicator */}
           <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-muted-foreground/30 rounded-full" />
         </div>
       </div>
       
       {/* Caption */}
       {caption && (
         <p className="text-xs sm:text-sm text-muted-foreground text-center max-w-[150px]">
           {caption}
         </p>
       )}
     </div>
   );
 };
 
 export default PhoneMockup;