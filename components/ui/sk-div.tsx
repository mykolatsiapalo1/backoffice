import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import React from "react";
import { Skeleton } from "./skeleton";

export interface SkDivProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
  isLoading?: boolean;
  skeletonClassName?: string;
}

const SkDiv = React.forwardRef<HTMLDivElement, SkDivProps>(
  ({ className, isLoading = false, skeletonClassName, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <>
        {isLoading ? (
          <Skeleton className={cn(skeletonClassName)} />
        ) : (
          <Comp className={cn(className)} ref={ref} {...props}>
            {children}
          </Comp>
        )}
      </>
    );
  },
);
SkDiv.displayName = "SkDiv";

export { SkDiv };
