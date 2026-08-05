import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { loadOrders, removeOrder } from "../../store/ordersSlice";
import { removeProduct } from "../../store/productsSlice";
import { OrdersList } from "../../components/Orders/OrdersList/OrdersList";
import { OrderDetails } from "../../components/Orders/OrderDetails/OrderDetails";
import { DeleteModal } from "../../components/DeleteModal/DeleteModal";
import { PageLoader } from "../../components/PageLoader/PageLoader";

import "./OrdersPage.scss";
import { AnimatePresence, motion } from "framer-motion";

export const OrdersPage = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.orders);
  const products = useAppSelector((state) => state.products.items);
  const searchQuery = useAppSelector((state) => state.search.query);

  const [selectedOrderId, setSelectedOrderId] = useState<number | null>(null);
  const [orderToDelete, setOrderToDelete] = useState<number | null>(null);
  const [productToDelete, setProductToDelete] = useState<number | null>(null);

  useEffect(() => {
    dispatch(loadOrders());
  }, [dispatch]);

  const filteredOrders = useMemo(() => {
    if (!searchQuery.trim()) return items;
    return items.filter((o) =>
      o.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [items, searchQuery]);

  if (error) return <div>Error: {error}</div>;

  const selectedOrder = items.find((o) => o.id === selectedOrderId) ?? null;
  const orderPendingDeletion =
    items.find((o) => o.id === orderToDelete) ?? null;
  const productPendingDeletion =
    products.find((p) => p.id === productToDelete) ?? null;

  const handleConfirmDeleteOrder = () => {
    if (orderToDelete !== null) {
      dispatch(removeOrder(orderToDelete));
      if (selectedOrderId === orderToDelete) {
        setSelectedOrderId(null);
      }
      setOrderToDelete(null);
    }
  };

  const handleConfirmDeleteProduct = () => {
    if (productToDelete !== null) {
      dispatch(removeProduct(productToDelete));
      setProductToDelete(null);
    }
  };

  return (
    <div className="orders-page">
      {loading ? (
        <PageLoader message="Loading orders..." />
      ) : (
        <>
          <h1 className="orders-page__heading">
            Orders / {filteredOrders.length}
          </h1>

          <motion.div
            key="orders-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="orders-page__body"
          >
            <OrdersList
              orders={filteredOrders}
              selectedOrderId={selectedOrderId}
              onSelectOrder={setSelectedOrderId}
              onDeleteOrder={setOrderToDelete}
            />

            <AnimatePresence>
              {selectedOrder && (
                <OrderDetails
                  order={selectedOrder}
                  onClose={() => setSelectedOrderId(null)}
                  onDeleteProduct={setProductToDelete}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}

      <AnimatePresence>
        {orderPendingDeletion && (
          <DeleteModal
            title={orderPendingDeletion.title}
            onConfirm={handleConfirmDeleteOrder}
            onCancel={() => setOrderToDelete(null)}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {productPendingDeletion && (
          <DeleteModal
            title={productPendingDeletion.title}
            subtitle={`SN-${productPendingDeletion.serialNumber}`}
            photo={productPendingDeletion.photo}
            onConfirm={handleConfirmDeleteProduct}
            onCancel={() => setProductToDelete(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
