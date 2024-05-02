import { HomePage } from "./components/getProducts/HomePage";
import AddProducts from "./components/addProducts/AddProducts";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="app-container">
      <Switch>
        <Route path="/addproduct">
          <AddProducts />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
