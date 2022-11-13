import "./App.css";
import Navbar from "./components/Navbar";
import MainRoutes from "./pages/MainRoutes";
import Footer from "./components/Footer";
import VendorRegistrationForm from "./pages/VendorRegistrationForm";
function App() {
     return (
          <div className="App">
               <Navbar />
               <MainRoutes />
               <Footer />
               {/* <VendorRegistrationForm /> */}
          </div>
     );
}

export default App;
