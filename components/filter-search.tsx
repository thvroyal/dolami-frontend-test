"use client";

import { useRef, useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { SearchInput } from "./ui/input";
import { SelectFilter } from "./ui/select-filter";
import { OutlineAdjustment, SearchMagnifyingGlass } from "./icons";
import { ButtonIcon } from "./ui/button";

export default function FilterSearch() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const category = searchParams.get("category") || "all";
    const search = searchParams.get("search") || "";

    setSelectedCategory(category);
    if (inputRef.current) {
      inputRef.current.value = search;
    }
  }, [searchParams]);

  const handleSearch = () => {
    const search = inputRef.current?.value || "";
    const params = new URLSearchParams();

    if (search) params.set("search", search);
    if (selectedCategory !== "all") params.set("category", selectedCategory);

    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex-1 flex items-center gap-2">
      <div className="relative flex-1 grid grid-cols-2 items-center bg-background-secondary rounded-full">
        <SearchInput ref={inputRef} autoComplete="off" />
        <SelectFilter
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        />
        <button
          onClick={handleSearch}
          className="absolute right-1 bg-primary rounded-full p-2"
        >
          <SearchMagnifyingGlass />
        </button>
      </div>
      <ButtonIcon>
        <OutlineAdjustment />
      </ButtonIcon>
    </div>
  );
}
