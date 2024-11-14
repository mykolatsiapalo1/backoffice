import { cn } from "@/lib/utils";
import "./small-loader.css";
export function SmallLoader({ className }: { className?: string }) {
  return <div className={cn("loader", className)}></div>;
}
