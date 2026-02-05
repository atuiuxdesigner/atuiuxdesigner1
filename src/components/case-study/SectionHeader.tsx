 import { cn } from "@/lib/utils";
 
 interface SectionHeaderProps {
   title: string;
   subtitle?: string;
   className?: string;
   align?: "left" | "center";
 }
 
 const SectionHeader = ({ title, subtitle, className, align = "center" }: SectionHeaderProps) => {
   return (
     <div className={cn(
       "mb-12",
       align === "center" && "text-center",
       className
     )}>
       <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
         {title}
       </h2>
       {subtitle && (
         <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
           {subtitle}
         </p>
       )}
     </div>
   );
 };
 
 export default SectionHeader;