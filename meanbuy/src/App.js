import './App.css';
import Navbar from './components/Navbar';
import mainRoutes from './pages/mainRoutes';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <mainRoutes />
      <Footer /> */}
      <Login />
    </div>
  );
}

export default App;
