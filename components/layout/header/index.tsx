import Image from "next/image";
import FilterSearch from "@/components/filter-search";
import Language from "./language";
import UserAction from "./user-action";
import { ButtonIcon } from "@/components/ui/button";
import OutlineCart from "@/components/icons/outline-cart";

export default function Header() {
  return (
    <header className="py-4">
      <div className="container flex justify-between items-center gap-[100px]">
        <Image src="/logo.svg" alt="Logo" width={170} height={32} />
        <FilterSearch />
        <div className="inline-flex items-center gap-6">
          <span>List your creation</span>
          <Language />
          <UserAction />
          <ButtonIcon className="p-3">
            <OutlineCart />
          </ButtonIcon>
        </div>
      </div>
    </header>
  );
}
