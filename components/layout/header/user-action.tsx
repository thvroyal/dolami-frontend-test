import { OutlineMenu, SolidAccountCircle } from "@/components/icons";
import { ButtonIcon } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserAction() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ButtonIcon>
          <OutlineMenu />
          <SolidAccountCircle />
        </ButtonIcon>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-base p-2">Sign in</DropdownMenuItem>
        <DropdownMenuItem className="text-base p-2">Sign up</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-base p-2">List your item</DropdownMenuItem>
        <DropdownMenuItem className="text-base p-2">Message to Yuta(The founder)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
