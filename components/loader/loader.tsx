import { cn } from "@/lib/utils";
import "./loader.css";

export function Loader({ className, title }: { className?: string; title?: string }) {
  return (
    <div data-glitch={title} className={cn("glitch", className)}>
      {title}
    </div>
  );
}
