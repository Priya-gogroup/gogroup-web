
import './App.css';
import HomeComponent from './components/Home/Home';
import NavbarComponent from './components/Navbar/Navbar';
import ToptoBottom from './components/shared/ScrollToTop';
import FooterComponent from './components/shared/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <FooterComponent />
      <ToptoBottom />
    </div>
  );
}

export default App;
