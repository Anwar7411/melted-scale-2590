import './App.css';
import Navbar from './components/Navbar';
import MainRoutes from './pages/MainRoutes';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
