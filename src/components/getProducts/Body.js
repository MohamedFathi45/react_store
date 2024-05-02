import "../../styles/body_grid.css";
import Products from "../../shared/Products";
const Body = ({ products, onCheckBoxChanged }) => {
  return (
    <div className="body-grid">
      <Products products={products} onCheckBoxChanged={onCheckBoxChanged} />
    </div>
  );
};

export default Body;
