"use client";

import * as React from "react";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export interface TagItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const TagItemContainer = React.forwardRef<HTMLDivElement, TagItemProps>(({ className, children, ...props }, ref) => (
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
TagItemContainer.displayName = "TagItemContainer";
const TagItemSign = React.forwardRef<HTMLSpanElement, TagItemProps>(({ className, children, ...props }, ref) => (
  <span ref={ref} className={cn(className)} {...props}>
    {children}
  </span>
));
TagItemSign.displayName = "TagItemSign";
const TagItemIconContainer = React.forwardRef<HTMLDivElement, TagItemProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn(className)} {...props}>
      {children}
    </div>
  ),
);
TagItemIconContainer.displayName = "TagItemIconContainer";
const TagItem = Object.assign(TagItemContainer, {
  Sign: TagItemSign,
  Icon: TagItemIconContainer,
});

export default TagItem;
