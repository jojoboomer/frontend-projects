import Card from "@/features/shoping-cart/Card";
import { $products } from "@/features/shoping-cart/cart-store";
import { useStore } from '@nanostores/react';
import { css } from "@styled-system/css";

function Products() {
  const products = useStore($products);
  
  return (
    <div className="product-list">
      <h2 className={css({ fontSize: "2.5rem", fontWeight: "extrabold" })}>
        Desserts
      </h2>
      <div className="product-list-container">
        {products.map((e, i) => (
          <Card key={i} item={e} />
        ))}
      </div>
    </div>
  );
}

export default Products;
