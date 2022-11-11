import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";
import Footer from "./components/Footer";
import { ProductCard } from "./components/ProductCard";
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <MainRoutes />
      <Footer /> */}
      <ProductCard />
    </div>
  );
}

export default App;
