import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadProducts, removeProduct } from "../../store/productsSlice";
import { selectProductTypes } from "../../store/selectors";
import { ProductsList } from "../../components/Products/ProductsList/ProductsList";
import { ProductsFilter } from "../../components/Products/ProductsFilter/ProductsFilter";
import { DeleteModal } from "../../components/DeleteModal/DeleteModal";
import "./ProductsPage.scss";
import { AnimatePresence, motion } from "framer-motion";

export const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const types = useAppSelector(selectProductTypes);

  const [selectedType, setSelectedType] = useState("");
  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const searchQuery = useAppSelector((state) => state.search.query);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    let result = items;
    if (selectedType) {
      result = result.filter((p) => p.type === selectedType);
    }
    if (searchQuery.trim()) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }
    return result;
  }, [items, selectedType, searchQuery]);

  if (error) return <div>Error: {error}</div>;

  const productPendingDeletion =
    items.find((p) => p.id === productToDelete) ?? null;

  const handleConfirmDelete = () => {
    if (productToDelete !== null) {
      dispatch(removeProduct(productToDelete));
      setProductToDelete(null);
    }
  };

  return (
    <div className="products-page">
      {loading ? (
        <div className="products-page__loading">Loading products...</div>
      ) : (
        <motion.div
          key="products-content"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <div className="products-page__header">
            <h1 className="products-page__heading">
              Products / {filteredProducts.length}
            </h1>
            <ProductsFilter
              types={types}
              selectedType={selectedType}
              onChange={setSelectedType}
            />
          </div>

          <ProductsList
            products={filteredProducts}
            onDeleteProduct={setProductToDelete}
          />

          <AnimatePresence>
            {productPendingDeletion && (
              <DeleteModal
                title={productPendingDeletion.title}
                subtitle={`SN-${productPendingDeletion.serialNumber}`}
                photo={productPendingDeletion.photo}
                onConfirm={handleConfirmDelete}
                onCancel={() => setProductToDelete(null)}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};
