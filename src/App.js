import logo from './logo.svg';
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import {useState} from "react";
import './App.css';
import Order from "./pages/Order";
import Sales from "./pages/Sales";

function App() {
  const storedSales = localStorage.getItem("sales");
  let initialSales = [];
  if(storedSales){
    initialSales = JSON.parse(storedSales);
  }
  const [sales, setSales] = useState(initialSales);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/order" component={()=> <Order setSales={setSales}/>}></Route>
          <Route path="/sales" component={() => <Sales sales={sales}/>}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
