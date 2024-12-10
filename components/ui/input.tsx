"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, useState } from "react";

const SearchInput: React.FC<ComponentProps<"input">> = ({
  ref,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col justify-center pl-8 py-[3px] rounded-full h-12 transition-all duration-300",
        isFocused && "bg-background-tertiary"
      )}
    >
      {!isFocused && (
        <label htmlFor="search" className="text-gray font-bold text-xs">
          Keyword
        </label>
      )}
      <input
        type="text"
        id="search"
        className={cn(
          "placeholder:text-gray bg-transparent focus:outline-none",
          className
        )}
        placeholder="Search keyword"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        ref={ref}
        {...props}
      />
    </div>
  );
};

SearchInput.displayName = "SearchInput";

export { SearchInput };
