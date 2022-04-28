
import About from "./Components/About";
import Home from "./Components/Home";
import Products from './Components/Products'
import Tree from './assets/Images/Tree.png'
import Header from "./Components/Header";

function App() {
  return (
  <div className="fluid">
 <Header/>
 <Home/>
 <Products/>
 <About/>
<img className="TreeImg" src={Tree} alt='Tree'/>
  </div>
  );
}

export default App;
