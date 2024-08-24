import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* import Img from './images'; */
import About from '../src/components/About';
import Menu from '../src/components/Menu';
import Brand from '../src/components/Brand';
import Review from '../src/components/Review';
import Newsletter from '../src/components/Newsletter';
import Footer from '../src/components/Footer';
import ScrollUp from '../src/components/ScrollUp';
import Home from '../src/components/Home';


function App() {
  return (
    <>
    <Home />  
    <About />
    <Menu />
    <Brand />
    <Review />
    <Newsletter />
    <Footer />
    <ScrollUp />
    {/* <Img /> */}
  </>
);
}

export default App;
