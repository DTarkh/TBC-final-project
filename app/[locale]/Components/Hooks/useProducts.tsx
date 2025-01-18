export interface Products {
  id: number;
  category_en: string;
  title_en: string;
  title_ge: string;
  price: number;
  description: string;
  rating: number;
  thumbnail: string;
  featured: boolean;
  discountPercentage: number;
}

const useProducts = async (category?: string, minPrice?:string, maxPrice?:string, search?:string, order?:string): Promise<Products[]> => {
  let url = `${process.env.NEXT_PUBLIC_API_URL}/api/products`; 


  if (order) {
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?order=${order}`
  }


if (search) {
  url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?search=${search}`
}


 if (minPrice && maxPrice)
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
  

  if (category) {
    url = `${process.env.NEXT_PUBLIC_API_URL}/api/products/category/${category}`
  }

  const data = await fetch(url);
  const products: Products[] = await data.json();

  return products;
};

export default useProducts;