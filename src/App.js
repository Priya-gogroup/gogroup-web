
import './App.css';
import CareeresComponent from './components/Careers/Careeres';
import ContactUs from './components/Contact/Contact';
import HomeComponent from './components/Home/Home';
import NavbarComponent from './components/Navbar/Navbar';
import ToptoBottom from './components/shared/ScrollToTop';
import FooterComponent from './components/shared/footer/Footer';
import { BrowserRouter as Router,
  Switch,
  Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/careers">
            <CareeresComponent />
          </Route>
          <Route path="/contact-us">
              <ContactUs />
          </Route>
        </Switch>
      </Router>
      <FooterComponent />
      <ToptoBottom />
    </div>
  );
}

export default App;
