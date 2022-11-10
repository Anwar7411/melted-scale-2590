import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FlashSale from './Pages/FlashSale';
import MainRoutes from './Pages/MainRoutes'

function App() {
  return (
    <div className="App">
      <Navbar />

      <MainRoutes />

      {/* <FlashSale/> */}
 
      {/* <mainRoutes/> */}

      <Footer />

    </div>
  );
}

export default App;
