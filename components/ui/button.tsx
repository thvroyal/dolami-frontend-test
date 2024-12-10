import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

const ButtonIcon = ({ className, ...props }: ComponentProps<"button">) => {
  return (
    <button
      className={cn(
        "p-2 ring-1 ring-offWhite flex items-center justify-center gap-2.5 rounded-full",
        className
      )}
      {...props}
    />
  );
};

ButtonIcon.displayName = "ButtonIcon";

export { ButtonIcon };
