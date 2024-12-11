import Image from "next/image";
import { getProduct } from "@/actions/query-product";
import { cn } from "@/lib/utils";

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const product = await getProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="h-[600px] sticky top-8 bg-background-secondary rounded-lg">
            {product.images[0] && (
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className={cn("object-cover rounded-lg")}
              />
            )}
          </div>
        </div>

        <div className="md:w-1/2 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex gap-2">{product.categories.join(" > ")}</div>
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center space-x-2">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-xl ${
                      i < Math.floor(product.avgRating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-gray-600">({product.avgRating})</span>
              </div>
            </div>
            <p className="text-2xl font-semibold">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex items-center space-x-4">
              {product.creator.avatar && (
                <Image
                  src={product.creator.avatar}
                  alt={product.creator.name}
                  width={40}
                  height={40}
                  className="rounded-full bg-background-secondary"
                />
              )}
              <span>Created by {product.creator.name}</span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="flex gap-4">
              <button className="flex-1 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors">
                Add to Cart
              </button>
              <button className="flex-1 bg-background-secondary text-white py-3 px-6 rounded-lg hover:bg-black/90 transition-colors">
                Buy Now
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Product Details</h2>
            <dl className="grid grid-cols-1 gap-4">
              {Object.entries(product.details).map(([key, value]) => (
                <div key={key} className="border p-4 rounded-lg">
                  <dt className="font-semibold">{key}</dt>
                  <dd className="text-gray-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">
              Customer Reviews ({product.reviews.length})
            </h2>
            <div className="space-y-4">
              {product.reviews.map((review) => (
                <div key={review.id} className="border p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{review.userName}</div>
                    <div className="text-sm text-gray-500">{review.date}</div>
                  </div>
                  <div className="flex items-center my-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-xl ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
