import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { PageLoader } from "../components/PageLoader/PageLoader";

const OrdersPage = lazy(() =>
  import("../pages/OrdersPage/OrdersPage").then((m) => ({
    default: m.OrdersPage,
  })),
);
const ProductsPage = lazy(() =>
  import("../pages/ProductsPage/ProductsPage").then((m) => ({
    default: m.ProductsPage,
  })),
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage").then((m) => ({
    default: m.NotFoundPage,
  })),
);

export const AnimatedRoutes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 24 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/orders" replace />} />
        <Route
          path="/orders"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<PageLoader />}>
                <OrdersPage />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="/products"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<PageLoader />}>
                <ProductsPage />
              </Suspense>
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Suspense fallback={<PageLoader />}>
                <NotFoundPage />
              </Suspense>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};
