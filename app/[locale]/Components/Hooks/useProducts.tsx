export interface Products {
  id: number;
  category_en: string;
  title_en: string;
  price: number;
  description: string;
  rating: number;
  thumbnail: string;
}

const useProducts = async (category?: string, minPrice?:string, maxPrice?:string, search?:string, order?:string): Promise<Products[]> => {
  let url = 'http://localhost:3000/api/products'; 


  if (order) {
    url = `http://localhost:3000/api/products?order=${order}`
  }


if (search) {
  url = `http://localhost:3000/api/products?search=${search}`
}


 if (minPrice && maxPrice)
    url = `http://localhost:3000/api/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
  

  if (category) {
    url = `http://localhost:3000/api/products/category/${category}`
  }

  const data = await fetch(url);
  const products: Products[] = await data.json();

  return products;
};

export default useProducts;