import Rating from "@/app/[locale]/Components/Rating";
import { Link } from "@/i18n/routing";
import Image from "next/image";


const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const response = await fetch(
    `http://localhost:3000/api/products/${params.id}`
  );
  const ProductDetail = await response.json();

  return (
    <div className="container mx-auto py-10 px-4">
      {ProductDetail.map((product: any) => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 shadow-lg rounded-lg" key={product.id}>
          <div className="flex justify-center items-center">
            <Image
              src={product.thumbnail}
              alt={product.title_en}
              className="rounded-lg object-cover"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col justify-between">
    
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {product.title_en}
              </h1>
              <p className="text-sm text-gray-600 mb-4">
                Category: {product.category_en}
              </p>

              <p className="text-gray-700 mb-4">{product.description_en}</p>
            </div>

            <div className="mb-6">
              <p className="text-xl font-semibold text-gray-800 mb-2">
                Price:
                <span className="text-green-600">${product.price}</span>
                {product.discountPercentage > 0 && (
                  <span className="text-sm text-gray-500 line-through ml-2">
                    $
                    {(
                      product.price /
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
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

            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Brand:
                <span className="font-medium text-gray-800">
                  {product.brand}
                </span>
              </p>
              <p className="text-sm text-gray-600">
                Weight:
                <span className="font-medium text-gray-800">
                  {product.weight}
                </span>
              </p>
            </div>

            <div className="mb-6 flex items-center gap-1">
              <p className="text-sm text-gray-600">Rating:</p>
              <Rating />
            </div>

            <div className="flex gap-2 items-center">
              <button className="btn btn-success w-[50%] py-2 px-4 rounded-md text-white">
                <Link href="/store">Proceed to Store</Link>
              </button>
              <button className="btn btn-primary w-[50%] py-2 px-4 rounded-md text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
