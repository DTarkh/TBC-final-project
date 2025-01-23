import { Products } from "./Hooks/useProducts";
import ProductCard from "./ProductCard";


interface Props {
  category: string;
}

const RelatedProducts = async ({category}: Props) => {
    const reponse = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products`
      );
      const products: Products[] = await reponse.json();
    
      const relatedProducts: Products[] = products.filter((p) => p.category_en === category);
      const reversedProducts: Products[] = relatedProducts.reverse()
      const lastFourProducts: Products[] = reversedProducts.slice(0,4)
    

      
      return (
        <div className="px-[10%] max-lg:px-[2%] my-10">
            <div className="grid  grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2">
          <ProductCard products={lastFourProducts} />
    
            </div>
        </div>
      );
}

export default RelatedProducts