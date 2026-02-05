 import { cn } from "@/lib/utils";
 
 interface MetricCardProps {
   value: string;
   label: string;
   description: string;
   className?: string;
 }
 
 const MetricCard = ({ value, label, description, className }: MetricCardProps) => {
   return (
     <div className={cn(
       "bg-card border border-border rounded-2xl p-6 md:p-8 text-center card-hover",
       className
     )}>
       <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2">
         {value}
       </div>
       <div className="text-lg md:text-xl font-semibold mb-3">
         {label}
       </div>
       <p className="text-sm md:text-base text-muted-foreground">
         {description}
       </p>
     </div>
   );
 };
 
 export default MetricCard;