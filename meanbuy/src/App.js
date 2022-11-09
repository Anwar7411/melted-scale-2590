import './App.css';
import Navbar from './components/Navbar';
import mainRoutes from './pages/mainRoutes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <mainRoutes />
      <Footer />
    </div>
  );
}

export default App;
