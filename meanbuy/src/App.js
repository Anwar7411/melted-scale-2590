import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Admindashboard from "./pages/Admindashboard";
function App() {
     return (
          <div className="App">
               {/* <Navbar />
      <MainRoutes />
      <Footer /> */}
               {/* <Checkout /> */}
               <Admindashboard />
          </div>
     );
}

export default App;
