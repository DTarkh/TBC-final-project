

export interface Products {
  id: number;
  category_en: string;
  title_en: string;
  price: number;
  description: string;
  rating: number;
  thumbnail: string;
}



const useProducts = async ():Promise<Products[]> => {

    const data = await fetch(`http://localhost:3000/api/products`)
    const products: Products[] = await data.json()

   

    console.log("products", products)


  return products;
}

export default useProducts;

