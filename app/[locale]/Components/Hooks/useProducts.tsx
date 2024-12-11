

export interface Products {
  id: number;
  category: cat[];
  title: string;
  price: number;
  description: string;
  rating: number;
  thumbnail: string;
}

export interface cat{
  title: string;
  id: number;
}

const useProducts = async (category?: number, minPrice?:string, maxPrice?:string, search?:string): Promise<Products[]> => {
  let url = 'http://127.0.0.1:8000/store/products/'; 
  

if (search) {
  url = `http://127.0.0.1:8000/store/products?product_title=${search}`
}


 if (minPrice && maxPrice)
    url = `http://127.0.0.1:8000/store/products?minPrice=${minPrice}&maxPrice=${maxPrice}`
  

  if (category) {
    url = `http://127.0.0.1:8000/store/products?category=${category}`
  }

  const data = await fetch(url);
  const products: Products[] = await data.json();
  console.log(products)
  return products;
};

export default useProducts;