
import { useAppSelector } from "./store/hooks";
import type { Product } from "./types";

function App() {
const products: Product[] = useAppSelector((state) => state.products.items);
console.log(products);
  return (
    <>
      <h1>Hello, Vite!</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.photo} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.type}</p>

        </div>
      ))}
    </>
  );
}

export default App;
