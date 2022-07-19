import "./App.css";
import Header from "./Components/CustomNavbar";
import ListOfSeller from "./Components/ListOfSeller";
import { BrowserRouter as Router,Route,Switch} from "react-router-dom";
import CreateSeller from "./Components/CreateSeller";
import UpdateSeller from "./Components/UpdateSeller";
import ListOfProducts from "./Components/ListOfProducts";
import CreateProducts from "./Components/CreateProducts";
import ListOfBuyers from "./Components/ListOfBuyers";
import CreateBuyer from "./Components/CreateBuyer";
import UpdateBuyer from "./Components/UpdateBuyer";
import ListOfBids from "./Components/ListOfBids";
import CreateBids from "./Components/CreateBids";

function App() {
  return (
    <Router>
      
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListOfSeller}/>
            <Route path="/sellers"  component={ListOfSeller}/>
            <Route path="/add-seller"  component={CreateSeller}/>
            <Route path="/update-seller/:id"  component={UpdateSeller}/>
            <Route path="/products"  component={ListOfProducts}/>
            <Route path="/seller/add-product/:id" component={CreateProducts}/>
            <Route path="/buyers" component={ListOfBuyers}/>
            <Route path="/add-buyer"  component={CreateBuyer}/>
            <Route path="/update-buyer/:id"  component={UpdateBuyer}/>
            <Route path="/bids"  component={ListOfBids}/>
            <Route path="/add-bids/product/:id"  component={CreateBids}/>
          </Switch>
        </div>
      
    </Router>
    
  );
}

export default App;
