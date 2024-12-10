import { categories } from "@/data/categories";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import { SelectProps } from "@radix-ui/react-select";

const SelectFilter = (props: SelectProps) => {
  return (
    <Select {...props}>
      <SelectTrigger className="min-w-[180px] text-gray text-base">
        <label className="text-xs font-semibold text-gray">Category</label>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectGroup key={category.id}>
            <SelectLabel>{category.name}</SelectLabel>
            {category.children.map((child) => (
              <SelectItem key={child.id} value={child.id}>
                {child.name}
              </SelectItem>
            ))}
            <SelectItem key={category.id} value={category.id}>
              {`All in ${category.name}`}
            </SelectItem>
          </SelectGroup>
        ))}
        <SelectItem value="all">All</SelectItem>
      </SelectContent>
    </Select>
  );
};

SelectFilter.displayName = "SelectFilter";

export { SelectFilter };
