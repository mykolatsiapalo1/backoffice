import { cn } from "@/lib/utils";
import React from "react";
import { text } from "stream/consumers";

export interface InfoSignProps extends React.HTMLAttributes<HTMLDivElement> {}
const InfoSignContainer = React.forwardRef<HTMLDivElement, InfoSignProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex cursor-pointer flex-row items-center gap-4 rounded-lg px-4 py-1 text-primary hover:bg-accent",
      className,
    )}
    {...props}
  >
    {children}
  </div>
));

const InfoSignHeader = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(({ className, children, ...props }, ref) => (
  <span ref={ref} className={cn(className)} {...props}>
    {children}
  </span>
));

InfoSignContainer.displayName = "InfoSignContainer";


const InfoSign = Object.assign(InfoSignContainer, {
  Sign: InfoSignHeader,
});

export default InfoSign;




