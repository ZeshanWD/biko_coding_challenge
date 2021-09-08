import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import NotFound from './pages/NotFound';
import './resources/css/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div> 
    </BrowserRouter>
  );
}

export default App;
