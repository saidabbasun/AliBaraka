
import About from "./Components/About";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Products from './Components/Products'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <div className="fluid">

 <Home/>
 <Products/>
 <About/>
 <Blog/>
 <Contact/>
 <Footer/>
  </div>
  );
}

export default App;
