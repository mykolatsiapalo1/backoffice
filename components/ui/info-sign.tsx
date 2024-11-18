import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";
import { ListFilter } from "lucide-react";
import React from "react";

export type FilterItem = {
  label: string;
  value: string;
};

export interface InfoSignProps extends React.HTMLAttributes<HTMLDivElement> {}
const InfoSignContainer = React.forwardRef<HTMLDivElement, InfoSignProps>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex h-16 items-center justify-between overflow-hidden rounded-xl border bg-gray-50 p-4", className)}
    {...props}
  >
    {children}
  </div>
));

const InfoSignHeader = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...props }, ref) => (
    <span ref={ref} className={cn("text-depa-gray-700 text-base font-semibold leading-normal", className)} {...props}>
      {children}
    </span>
  ),
);

export interface InfoSignFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  filters: FilterItem[];
  selectFilter: (value: string) => void;
}
const InfoSignFilter = React.forwardRef<HTMLDivElement, InfoSignFilterProps>(
  ({ className, children, filters, selectFilter }, ref) => (
    <div ref={ref} className={cn("flex items-center gap-2", className)}>
      <Select onValueChange={(value) => selectFilter(value)}>
        <SelectTrigger>
          <ListFilter className="mr-2 h-4 w-4" />
          <SelectValue placeholder={children}>{children}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {filters?.map((filter) => (
            <SelectItem value={filter.value} key={filter.value}>
              {filter.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  ),
);

InfoSignContainer.displayName = "InfoSignContainer";

const InfoSign = Object.assign(InfoSignContainer, {
  Sign: InfoSignHeader,
  Filter: InfoSignFilter,
});

export { InfoSign };
