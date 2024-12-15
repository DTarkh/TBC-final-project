import Rating from "@/app/[locale]/Components/Rating";
import Image from "next/image";
import { cat } from "@/app/[locale]/Components/Hooks/useProducts";

interface CatProp {
  category: cat;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(`http://127.0.0.1:8000/store/products/${params.id}`);
  const product = await response.json();

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 shadow-lg rounded-lg">
        {/* Left Section: Product Image */}
        <div className="flex justify-center items-center">
          <Image
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg object-cover"
            width={500}
            height={500}
          />
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-col justify-between">
          {/* Product Title and Category */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
            <p className="text-sm text-gray-600 mb-4">
              Category:{" "}
              {product.category.map((cat: cat) => (
                <span key={cat.id} className="font-medium text-gray-700">
                  {cat.title}
                </span>
              ))}
            </p>

            {/* Product Description */}
            <p className="text-gray-700 mb-4">{product.description}</p>
          </div>

          {/* Price and Stock Info */}
          <div className="mb-6">
            <p className="text-xl font-semibold text-gray-800 mb-2">
              Price:
              <span className="text-green-600">
                ${product.price.toFixed(2)}
              </span>
              {product.discount > 0 && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                </span>
              )}
            </p>
            <p className="text-sm text-gray-500">
              Stock:
              <span
                className={
                  product.stock > 0 ? "text-green-500" : "text-red-500"
                }
              >
                {product.stock > 0 ? product.stock : "Out of stock"}
              </span>
            </p>
          </div>

          {/* Brand and Weight */}
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Brand:
              <span className="font-medium text-gray-800">{product.brand}</span>
            </p>
            <p className="text-sm text-gray-600">
              Weight:
              <span className="font-medium text-gray-800">{product.weight}</span>
            </p>
          </div>

          {/* Rating */}
          <div className="mb-6 flex items-center gap-1">
            <p className="text-sm text-gray-600">
              Rating: 
            </p>
            <Rating/>
          </div>

          {/* Add to Cart Button */}
          <div>
            <button className="btn btn-primary w-full py-2 px-4 rounded-md text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;