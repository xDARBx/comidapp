import 'bootstrap/dist/css/bootstrap.min.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Muestra from './components/Muestra';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header />
      <Muestra/>
      <Footer />
    </div>
  );
}

export default App;
