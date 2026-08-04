import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { loadProducts, removeProduct } from '../../store/productsSlice';
import { selectProductTypes } from '../../store/selectors';
import { ProductsList } from '../../components/Products/ProductsList/ProductsList';
import { ProductsFilter } from '../../components/Products/ProductsFilter/ProductsFilter';
import { DeleteModal } from '../../components/DeleteModal/DeleteModal';
import './ProductsPage.scss';

export const ProductsPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const types = useAppSelector(selectProductTypes);

  const [selectedType, setSelectedType] = useState('');
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    if (!selectedType) return items;
    return items.filter((p) => p.type === selectedType);
  }, [items, selectedType]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  const productPendingDeletion = items.find((p) => p.id === productToDelete) ?? null;

  const handleConfirmDelete = () => {
    if (productToDelete !== null) {
      dispatch(removeProduct(productToDelete));
      setProductToDelete(null);
    }
  };

  return (
    <div className="products-page">
      <div className="products-page__header">
        <h1 className="products-page__heading">Products / {filteredProducts.length}</h1>
        <ProductsFilter types={types} selectedType={selectedType} onChange={setSelectedType} />
      </div>

      <ProductsList products={filteredProducts} onDeleteProduct={setProductToDelete} />

      {productPendingDeletion && (
        <DeleteModal
          title={productPendingDeletion.title}
          subtitle={`SN-${productPendingDeletion.serialNumber}`}
          photo={productPendingDeletion.photo}
          onConfirm={handleConfirmDelete}
          onCancel={() => setProductToDelete(null)}
        />
      )}
    </div>
  );
};