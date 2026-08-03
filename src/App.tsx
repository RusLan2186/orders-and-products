import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { OrdersPage } from "./pages/OrdersPage";
import { ProductsPage } from "./pages/ProductsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TopMenu } from "./components/TopMenu/TopMenu";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <TopMenu />
        <div className="app__body">
          <AsideMenu />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/orders" replace />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="" element={<ProductsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
