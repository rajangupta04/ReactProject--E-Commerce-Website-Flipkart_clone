import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AddProduct from './components/AddProduct';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Home from "./components/Home";
import Login from './components/Login';
import ProductDetails from './components/ProductDetails';
import Update from './components/Update';

function App() {
  return (

   <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">  <Login/> </Route> 
            <Route path="/user">    <Home/>  </Route>
            <Route path="/addnewproduct" >  <AddProduct/></Route>
            <Route path="/cart">    <Cart/>  </Route>
            <Route path="/productDetails:id"> <ProductDetails /></Route>
            <Route path="/admin">   <Admin/>  </Route>
            <Route path="/updateproduct:id">  <Update/> </Route>
        </Switch>
      </div>
   </Router>
  );
}

export default App;
