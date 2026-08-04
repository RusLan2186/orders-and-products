import { ProductRow } from "../ProductRow/ProductRow";
import type { Product } from "../../../types";
import "./ProductsList.scss";

interface ProductsListProps {
  products: Product[];
  onDeleteProduct: (id: number) => void;
}

export const ProductsList = ({
  products,
  onDeleteProduct,
}: ProductsListProps) => {
  return (
    <div className="products-list">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            onDelete={() => onDeleteProduct(product.id)}
          />
        ))
      ) : (
        <p className="empty">No products found.</p>
      )}
    </div>
  );
};
