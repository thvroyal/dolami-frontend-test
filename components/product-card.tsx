import Image from "next/image";
import { SolidStar } from "./icons";
import { Product } from "@/types/product";
import Link from "next/link";

type ProductCardProps = Product;

export const ProductCard = ({
  categories,
  name,
  creator,
  avgRating,
  price,
  images,
  id,
}: ProductCardProps) => {
  return (
    <Link href={`/${id}`}>
      <div className="w-full flex flex-col gap-2">
        <div className="w-full aspect-square bg-background-tertiary relative rounded-xl overflow-hidden">
          {images[0] && (
            <Image src={images[0]} alt={name} fill className="object-cover" />
          )}
          <div className="absolute w-full h-full flex flex-col justify-center items-center text-offWhite text-base">
            <span>
              {categories[0]}
              <br />
              <span>{`> ${categories[1]}`}</span>
            </span>
          </div>
        </div>
        <div className="w-full inline-flex flex-col text-sm text-offWhite">
          <span className="font-bold">{name}</span>
          <span className="text-gray">{creator.name}</span>
          <div className="flex flex-row items-center">
            {Array.from({ length: Math.floor(Number(avgRating)) }).map(
              (_, index) => (
                <SolidStar key={name + index} />
              )
            )}
            <span className="ml-1">{avgRating}</span>
          </div>
          <span className="font-bold">{`$ ${price}`}</span>
        </div>
      </div>
    </Link>
  );
};
