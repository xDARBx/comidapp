import 'bootstrap/dist/css/bootstrap.min.css';
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
