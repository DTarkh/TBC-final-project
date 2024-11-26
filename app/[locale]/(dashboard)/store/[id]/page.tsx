interface Props {
    params: { id: string };
  }
  
  const Product = ({ params: { id } }: Props) => {
    return <div>Product {id}</div>;
  };
  
  export default Product;