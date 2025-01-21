import { Products } from "../Components/Hooks/useProducts";
import ProductCard from "./ProductCard";

const FeaturedProducts = async () => {
  const reponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products`
  );
  const products: Products[] = await reponse.json();

  const featuredProducts: Products[] = products.filter((p) => p.featured);

  return (
    <div className="mx-[10%] my-10">
        <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2">
      <ProductCard products={featuredProducts} />

        </div>
    </div>
  );
};

export default FeaturedProducts;
