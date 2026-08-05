import { BrowserRouter } from "react-router-dom";
import { AsideMenu } from "./components/AsideMenu/AsideMenu";
import { TopMenu } from "./components/TopMenu/TopMenu";
import { AnimatedRoutes } from "./routes/AnimatedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <TopMenu />
        <div className="app__body">
          <AsideMenu />
          <main>
            <AnimatedRoutes />
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
