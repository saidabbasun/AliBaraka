
import About from "./Components/About";
import Home from "./Components/Home";
import Products from './Components/Products'
import Tree from './assets/Images/Tree.png'

function App() {
  return (
  <div className="fluid">
 
 <Home/>
 <Products/>
 <About/>
<img  im src={Tree} alt='Tree'/>
  </div>
  );
}

export default App;
