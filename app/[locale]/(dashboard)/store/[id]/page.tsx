import Header from "@/app/[locale]/Components/Header";
import Rating from "@/app/[locale]/Components/Rating";
import RelatedProducts from "@/app/[locale]/Components/RelatedProducts";
import { Link } from "@/i18n/routing";
import Image from "next/image";



interface Product {
  id: number;
  category_en: string;
  description_en: string;
  title_en: string;
  title_ge: string;
  brand:string,
  price: number;
  stock: number, 
  description: string;
  rating: number;
  thumbnail: string;
  featured: boolean;
  discountPercentage: number;
  weight:number
}



const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`);
  if (!response.ok) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold text-red-600">Product not found</h1>
      </div>
    );
  }
  const ProductDetail = await response.json();

  return (
    <>
    
    


   
      {ProductDetail.map((product: Product) => (
        <div className="w-full py-[12vh]" key={product.id}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 shadow-lg rounded-lg mx-[10%] max-lg:mx-[2%] mb-6 " >
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
        <Header>Related Products</Header>
        <RelatedProducts category={product.category_en}/>
        </div>
      ))}
    </>
  );
};

export default ProductDetail;
