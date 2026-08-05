import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadProducts, removeProduct } from "../../store/productsSlice";
import { selectProductTypes } from "../../store/selectors";
import { ProductsList } from "../../components/Products/ProductsList/ProductsList";
import { ProductsFilter } from "../../components/Products/ProductsFilter/ProductsFilter";
import { DeleteModal } from "../../components/DeleteModal/DeleteModal";
import { PageLoader } from "../../components/PageLoader/PageLoader";
import "./ProductsPage.scss";
import { AnimatePresence, motion } from "framer-motion";
import {
  getStoredValue,
  setStoredValue,
  STORAGE_KEYS,
} from "../../utils/storage";

export const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const types = useAppSelector(selectProductTypes);

  const [productToDelete, setProductToDelete] = useState<number | null>(null);
  const searchQuery = useAppSelector((state) => state.search.query);

  const [selectedType, setSelectedType] = useState(
    () => getStoredValue(STORAGE_KEYS.PRODUCT_TYPE_FILTER) ?? "",
  );

  const handleTypeChange = (type: string) => {
    setSelectedType(type);
    setStoredValue(STORAGE_KEYS.PRODUCT_TYPE_FILTER, type);
  };

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
        <PageLoader message="Loading products..." />
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
              onChange={handleTypeChange}
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
