
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Lathersec from './components/Lathersec';
import Productcard from './components/Productcard';
import Relatedcard from './components/Relatedcard';
import Footer from './components/Footer';
import Tab from './components/Tab';
import Backtotop from './components/Backtotop';

function App() {
  return (
    <div>
    <Header/>
    <Hero/>
    <Lathersec/>
    <Productcard/>
    <Tab/>
    <Relatedcard/>
    <Footer/>
    <Backtotop/>
    </div>
  );
}

export default App;
