import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader/loader";
import { HTMLAttributes } from "react";
const FullScreenLoader = ({
  className,
  title = "Loading...",
  isLoading = true,
  ...props
}: HTMLAttributes<HTMLDivElement> & { title?: string; isLoading?: boolean }) => {
  return (
    isLoading && (
      <div
        {...props}
        className={cn("fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50", className)}
      >
        <Loader title={title} />
      </div>
    )
  );
};

export default FullScreenLoader;
