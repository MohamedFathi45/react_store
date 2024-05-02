import Product from "./Product";
const Products = ({ products, onCheckBoxChanged }) => {
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          onCheckBoxChanged={onCheckBoxChanged}
        />
      ))}
    </>
  );
};

export default Products;
